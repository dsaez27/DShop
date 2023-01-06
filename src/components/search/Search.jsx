import { useSearchParams } from "react-router-dom";
import { debounce } from "lodash";
import { Container, Input, SearchContainer } from "./styled";
import { useState } from "react";

const Search = () => {
    const [focused, setFocused] = useState(false);
    const [search, setSearch] = useSearchParams();
    const onSearchChange = debounce((e) => {
        const text = e.target.value;

        if (text.length === 0) {
            search.delete("query");
            setSearch(search, {
                replace: true,
            });
        } else {
            search.set("query", text);
            setSearch(search, {
                replace: true,
            });
        }
    }, 350);

    return (
        <Container>
            <SearchContainer focused={focused}>
                <Input
                    autoComplete="off"
                    onBlur={() => setFocused(false)}
                    onFocus={() => setFocused(true)}
                    onChange={onSearchChange}
                    defaultValue={search.get("query") ?? ""}
                    id="search"
                    name="search"
                    type="search"
                    placeholder="Search products"
                />
            </SearchContainer>
        </Container>
    );
};

export default Search;
