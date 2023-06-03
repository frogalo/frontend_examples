import React from 'react';

function Divs() {
    return (
        <div>
            <div className="half">
                <div className={"leftSideDiv50"}>
                    Sample Text 1
                </div>
                <div className={"rightSideDiv50"}>
                    Sample Text 2
                </div>
            </div>
            <div className="third">
                <div className={"leftSideDiv30"}>
                    Sample Text 1
                </div>
                <div className={"rightSideDiv30"}>
                    Sample Text 2
                </div>
                <div className={"centerDiv30"}>
                    Sample Text 3
                </div>
            </div>
            <div className="quarter">
                <div className={"leftSideDiv20"}>
                    Sample Text 1
                </div>
                <div className={"rightSideDiv20"}>
                    Sample Text 2
                </div>
                <div className={"centerLeftDiv20"}>
                    Sample Text 3
                </div>
                <div className={"centerRightDiv20"}>
                    Sample Text 4
                </div>
            </div>
        </div>
    );
}

export default Divs;
