import { useState } from "react";

export function useForm(steps) {
    const [currentStep, setCurrentStep] = useState(0);

    function changeStep(passo, e) {
        if (e) e.preventDefault();

        if (passo < 0 || passo >= steps.length) return

        setCurrentStep(passo)
    }

    return {
        currentStep,
        currentComponent: steps[currentStep], /* possibilita a atualização dos passos */
        changeStep,
        isLastStep: currentStep + 1 === steps.length ? true : false,
        isFirstStep: currentStep === 0 ? true : false,
    };
}

//steps - passos