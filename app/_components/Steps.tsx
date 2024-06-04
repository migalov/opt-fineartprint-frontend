import React from 'react'

const Steps = ({ steps, currentStep }: any) => {
  return (
    <div>
        <ul>
            {
                steps.map( (step: any) => <>
                        {
                            step.number === currentStep && <li key={step.number}>Шаг #{step.number}: {step.title}</li>
                        }
                    </>
                )
            }
        </ul>
    </div>
  )
}

export default Steps
