import PropTypes from "prop-types";

const SORT_OPTIONS = [
    { value: "name", label: "Name" },
    { value: "price", label: "Price" },
];

const ORDER_OPTIONS = [
    { value: "asc", label: "Ascending" },
    { value: "desc", label: "Descending" },
];

export const FiltersForm = ({
    searchQuery,
    filters,
    setFilters,
    setSearchQuery,
}) => {
    return (
        <form>
            <div>
                <label htmlFor="search">Search:</label>
                <input
                    type="text"
                    id="search"
                    value={searchQuery}
                    onChange={(e) => {
                        setSearchQuery(e.target.value);
                    }}
                />
            </div>
            <div>
                <label htmlFor="page">Page:</label>
                <input
                    type="number"
                    id="page"
                    value={filters.page}
                    onChange={(e) =>
                        setFilters((prevFilters) => ({
                            ...prevFilters,
                            page: parseInt(e.target.value, 10),
                        }))
                    }
                />
            </div>
            <div>
                <label htmlFor="limit">Results per page:</label>
                <select
                    value={filters.limit}
                    defaultValue="1"
                    onChange={(e) => {
                        setFilters((prevFilters) => ({
                            ...prevFilters,
                            limit: parseInt(e.target.value, 10),
                        }));
                    }}
                >
                    <option value="1" key="1">
                        1
                    </option>
                    <option value="2" key="2">
                        2
                    </option>
                    <option value="3" key="3">
                        3
                    </option>
                    <option value="4" key="4">
                        4
                    </option>
                    <option value="5" key="5">
                        5
                    </option>
                </select>
            </div>
            <div>
                <label htmlFor="sort">Sort by:</label>
                <select
                    id="sort"
                    value={filters.sort}
                    onChange={(e) =>
                        setFilters((prevFilters) => ({
                            ...prevFilters,
                            sort: e.target.value,
                        }))
                    }
                >
                    {SORT_OPTIONS.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <label htmlFor="order">Order:</label>
                <select
                    id="order"
                    value={filters.order}
                    onChange={(e) => {
                        setFilters((prevFilters) => ({
                            ...prevFilters,
                            order: e.target.value,
                        }));
                    }}
                >
                    {ORDER_OPTIONS.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        </form>
    );
};

FiltersForm.propTypes = {
    searchQuery: PropTypes.string.isRequired,
    filters: PropTypes.shape({
        page: PropTypes.number.isRequired,
        limit: PropTypes.number.isRequired,
        sort: PropTypes.string.isRequired,
        order: PropTypes.string.isRequired,
    }).isRequired,
    setFilters: PropTypes.func.isRequired,
    setSearchQuery: PropTypes.func.isRequired,
};
