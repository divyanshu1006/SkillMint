import React, { useState, Children, type HTMLAttributes, type ReactNode } from 'react';
import { Check } from 'lucide-react';

interface StepperProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  initialStep?: number;
  onStepChange?: (step: number) => void;
  onFinalStepCompleted?: () => void;
  stepCircleContainerClassName?: string;
  stepContainerClassName?: string;
  contentClassName?: string;
  footerClassName?: string;
  backButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  nextButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  backButtonText?: string;
  nextButtonText?: string;
  disableStepIndicators?: boolean;
  renderStepIndicator?: (props: {
    step: number;
    currentStep: number;
    onStepClick: (clicked: number) => void;
  }) => ReactNode;
}

export function AnimatedStepper({
  children,
  initialStep = 1,
  onStepChange = () => {},
  onFinalStepCompleted = () => {},
  stepCircleContainerClassName = '',
  stepContainerClassName = '',
  contentClassName = '',
  footerClassName = '',
  backButtonProps = {},
  nextButtonProps = {},
  backButtonText = 'Back',
  nextButtonText = 'Continue',
  disableStepIndicators = false,
  renderStepIndicator,
  ...rest
}: StepperProps) {
  const [currentStep, setCurrentStep] = useState<number>(initialStep);
  const stepsArray = Children.toArray(children);
  const totalSteps = stepsArray.length;
  const isCompleted = currentStep > totalSteps;
  const isLastStep = currentStep === totalSteps;

  const updateStep = (newStep: number) => {
    setCurrentStep(newStep);
    if (newStep > totalSteps) {
      onFinalStepCompleted();
    } else {
      onStepChange(newStep);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      updateStep(currentStep - 1);
    }
  };

  const handleNext = () => {
    if (!isLastStep) {
      updateStep(currentStep + 1);
    }
  };

  const handleComplete = () => {
    updateStep(totalSteps + 1);
  };

  return (
    <div
      className={`flex min-h-[360px] w-full flex-col items-center justify-center ${rest.className || ''}`}
      {...rest}
    >
      <div
        className={`mx-auto w-full max-w-lg overflow-hidden rounded-[2rem] bg-white border border-slate-200/80 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)] ${stepCircleContainerClassName}`}
      >
        {/* Indicators */}
        <div className={`flex w-full items-center p-6 sm:p-8 pb-4 ${stepContainerClassName}`}>
          {stepsArray.map((_, index) => {
            const stepNumber = index + 1;
            const isNotLastStep = index < totalSteps - 1;
            return (
              <React.Fragment key={stepNumber}>
                {renderStepIndicator ? (
                  renderStepIndicator({
                    step: stepNumber,
                    currentStep,
                    onStepClick: clicked => {
                      updateStep(clicked);
                    }
                  })
                ) : (
                  <StepIndicator
                    step={stepNumber}
                    disableStepIndicators={disableStepIndicators}
                    currentStep={currentStep}
                    onClickStep={clicked => {
                      updateStep(clicked);
                    }}
                  />
                )}
                {isNotLastStep && <StepConnector isComplete={currentStep > stepNumber} />}
              </React.Fragment>
            );
          })}
        </div>

        {/* Content Area */}
        <div
          className={`space-y-4 px-6 sm:px-8 transition-all duration-300 ease-out ${contentClassName}`}
        >
          {!isCompleted && stepsArray[currentStep - 1]}
        </div>

        {/* Footer Actions */}
        {!isCompleted && (
          <div className={`px-6 sm:px-8 pb-6 sm:pb-8 pt-4 ${footerClassName}`}>
            <div className={`flex items-center ${currentStep !== 1 ? 'justify-between' : 'justify-end'}`}>
              {currentStep !== 1 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors duration-200 cursor-pointer"
                  {...backButtonProps}
                >
                  {backButtonText}
                </button>
              )}
              <button
                type="button"
                onClick={isLastStep ? handleComplete : handleNext}
                className="inline-flex h-11 items-center justify-center rounded-full bg-[#1e5dd7] px-7 text-sm font-semibold tracking-tight text-white shadow-md shadow-blue-500/20 transition-all duration-300 hover:bg-[#154bb3] hover:scale-[1.02] active:scale-95 cursor-pointer"
                {...nextButtonProps}
              >
                {isLastStep ? 'Claim Priority Spot 🚀' : nextButtonText}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * Step Sub-component for individual step content
 */
export function Step({ children, title }: { children: ReactNode; title?: string }) {
  return (
    <div className="py-2 animate-fadeIn">
      {title && <h3 className="mb-3 text-lg sm:text-xl font-bold tracking-tight text-slate-900">{title}</h3>}
      <div className="text-slate-600 leading-relaxed text-sm">{children}</div>
    </div>
  );
}

/**
 * Step Indicator Circle
 */
function StepIndicator({
  step,
  currentStep,
  onClickStep,
  disableStepIndicators = false
}: {
  step: number;
  currentStep: number;
  onClickStep: (clicked: number) => void;
  disableStepIndicators?: boolean;
}) {
  const isComplete = currentStep > step;
  const isActive = currentStep === step;

  return (
    <div
      onClick={() => !disableStepIndicators && onClickStep(step)}
      className={`relative flex items-center justify-center ${!disableStepIndicators ? 'cursor-pointer' : ''}`}
    >
      <div
        className={`flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border-2 font-bold transition-all duration-300 text-sm shadow-sm ${
          isComplete
            ? 'bg-[#1e5dd7] text-white border-[#1e5dd7]'
            : isActive
            ? 'bg-white text-[#1e5dd7] border-[#1e5dd7] scale-105 ring-4 ring-blue-500/15'
            : 'bg-[#f1f5f9] text-[#64748b] border-[#e2e8f0]'
        }`}
      >
        {isComplete ? (
          <Check className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={3} />
        ) : (
          <span>{step}</span>
        )}
      </div>
    </div>
  );
}

/**
 * Connector line between indicators
 */
function StepConnector({ isComplete }: { isComplete: boolean }) {
  return (
    <div className="relative mx-3 sm:mx-4 h-[2.5px] flex-1 overflow-hidden rounded-full bg-slate-200">
      <div
        className={`h-full bg-[#1e5dd7] transition-all duration-400 ease-out origin-left ${
          isComplete ? 'w-full' : 'w-0'
        }`}
      />
    </div>
  );
}

export default AnimatedStepper;
