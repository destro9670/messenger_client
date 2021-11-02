import React, {useState} from 'react';
import {observer} from "mobx-react-lite";

const TemplatePage: React.FC = () => {

    const templateName = useState<string>("")




    return (
        <React.Fragment>
            <div className="cbody text-monospace shadow">
                <div className="container-fluid content">


                    <div className="row bg-light pb-3">
                        <div className="col-12">


                        </div>
                    </div>
                </div>

            </div>

        </React.Fragment>
    )
};
export default observer(TemplatePage);