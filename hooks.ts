import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  SetStateAction,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PokemonProps } from "./Pokemon";

const GO_FEST_2022 = "20220604_GoFest";

export type Data = Record<string, PokemonProps>;

const usePersistence = () => {
  const [data, setData] = useState({} as Data);
  const [status, setStatus] = useState("default");

  useEffect(() => {
    AsyncStorage.setItem(GO_FEST_2022, JSON.stringify(data)).catch(
      console.error
    );
  }, [data]);

  useEffect(() => {
    setStatus("loading");
    AsyncStorage.getItem(GO_FEST_2022)
      .then((data) => {
        const loaded = data ? JSON.parse(data) : {};
        console.log(loaded);
        setData(loaded as Data);
        setStatus("default");
      })
      .catch((e) => {
        console.error(e);
        setStatus("error");
      });
  }, []);

  setTimeout(() => AsyncStorage.getItem(GO_FEST_2022).then(console.log), 10000);

  const persist = useCallback((pokemon: PokemonProps) => {
    setData(
      (oldData: Data) => ({ ...oldData, [pokemon.name]: pokemon } as Data)
    );
  }, []);

  return { data, status, persist };
};

export default usePersistence;
