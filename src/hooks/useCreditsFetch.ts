import { useEffect, useState } from "react";
import { CastMember } from "../interfaces/creditResponse";
import { axiosInstance } from "../apis/axios-instance";

const useCreditsFetch = (url: string) => {
  const [credit, setCredit] = useState<CastMember[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const getCredits = async () => {
      setIsLoading(true);
      try {
        const response = await axiosInstance.get(url);
        setCredit(response.data.cast);
      } catch (error) {
        setIsError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getCredits();
  }, [url]);

  return { credit, isLoading, isError };
};
export default useCreditsFetch;
