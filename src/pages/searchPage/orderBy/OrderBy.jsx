import Select from "./styled";

const OrderBy = ({ options, label, name, defaultValue = "", onChange }) => {
    return (
        <div>
            <Select onChange={onChange} name={name} defaultValue={defaultValue}>
                <option value="">{label}</option>
                {options.map((option, key) => (
                    <option key={key} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </Select>
        </div>
    );
};
export default OrderBy;
