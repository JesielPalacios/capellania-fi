import React from 'react'

export const GeneralInformation = () => {
  return (
    {fields.map(
                (
                  { field, placeholder, select, options, large, type },
                  index,
                  fieldItem
                ) => {
                  return (
                    <FieldWrapper key={index} large={large}>
                      {(flag = false)}
                      <LabelForm htmlFor={field}>{field}</LabelForm>
                      {ShowInput(select, field, options, placeholder, type)}
                    </FieldWrapper>
                  )
                }
              )}
  )
}
