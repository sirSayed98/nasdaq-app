import { createContext } from "react";
import { TickerContextType } from "./interfaces";

const TickerContext = createContext<TickerContextType | null>(null);

export default TickerContext;