import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./globalStyles";
import { AppRouter } from "./routes/AppRouter";
import "swiper/css/bundle";

const App = () => {
    return (
        <BrowserRouter>
            <GlobalStyles />
            <AppRouter />
        </BrowserRouter>
    );
};

export default App;
