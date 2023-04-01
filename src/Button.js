export const ButtonTypes = {
    NUMBER: 1,
    OPERATOR: 2,
    DELETE: 3,
    CALCULATE: 4
}

export function Button ({ text, altText, type }) {
    const buttonCommonClassName = "h-14 w-14 lg:h-20 lg:w-20 rounded-3xl";
    const buttonClassNameNumber = "bg-gray-400 hover:bg-gray-500";
    const buttonClassNameOperator = "bg-gray-500 hover:bg-gray-600";
    const buttonClassNameDelete = "bg-red-400 hover:bg-red-500";
    const buttonClassNameCalculate = "bg-blue-400 hover:bg-blue-500";

    let buttonClassName = buttonCommonClassName;
    if (type === ButtonTypes.NUMBER) buttonClassName += " " + buttonClassNameNumber;
    else if (type === ButtonTypes.OPERATOR) buttonClassName += " " + buttonClassNameOperator;
    else if (type === ButtonTypes.DELETE) buttonClassName += " " + buttonClassNameDelete;
    else if (type === ButtonTypes.CALCULATE) buttonClassName += " " + buttonClassNameCalculate;

    return (
        <div className="flex flex-1 justify-center items-center content-center text-white text-2xl">
            <button className={buttonClassName} alt={altText}>{text}</button>
        </div>
    );
}