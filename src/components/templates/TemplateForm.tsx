import React, {FC, useState} from 'react';
import {observer} from "mobx-react-lite";

interface TemplateFormProps {
    onAdd(title: string): void
}

export const TemplateForm: FC<TemplateFormProps> = props => {

    const [templateName, setTemplateName] = useState<string>('')

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTemplateName(event.target.value)
    }

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            props.onAdd(templateName)
            setTemplateName('')
        }

    }

    const btnClick = () => {
        props.onAdd(templateName)
        setTemplateName('')
    }

    return (
        <div className=" my-3 mx-4">
            <form>
                <div className=" row input-group">

                    <input type="text"
                           className=" col-9 form-control"
                           placeholder="Template name"
                           aria-label="Recipient's username"
                           aria-describedby="button-addon2"
                           onChange={changeHandler}
                           value={templateName}
                           onKeyPress={keyPressHandler}
                    />
                    <div className=" col-2 input-group-append">
                        <button className=" btn btn-primary "
                                type="button"
                                onClick={btnClick}
                        >
                            Add Template
                        </button>
                    </div>

                </div>
            </form>
        </div>

    );
};

export default observer(TemplateForm);