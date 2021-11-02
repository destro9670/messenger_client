import React, {FC, useState} from 'react';
import {observer} from "mobx-react-lite";

interface RowFormProps{
    onAdd(title: string): void;
}

const RowForm: FC <RowFormProps> = props => {

    const [pageName, setPageName] = useState<string>('')

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPageName(event.target.value)
    }

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            props.onAdd(pageName)
            setPageName('')
        }

    }

    const btnClick = () => {
        props.onAdd(pageName)
        setPageName('')
    }

    return (
        <div >
            <form>
                <div className=" my-4 mx-4 row input-group">

                    <input type="text"
                           className="col template-page-add-from-input form-control"
                           placeholder="Page name"
                           aria-label="Recipient's username"
                           aria-describedby="button-addon2"
                           onChange={changeHandler}
                           value={pageName}
                           onKeyPress={keyPressHandler}
                    />
                    <div className=" col input-group-append">
                        <button className=" btn btn-primary "
                                type="button"
                                onClick={btnClick}
                        >
                            Add Row
                        </button>
                    </div>

                </div>
            </form>
        </div>
    );
};

export default observer(RowForm);