import {
  QueryKey,
  UseMutationOptions,
  UseQueryOptions,
} from "@tanstack/react-query";

export type TUseMutationCustomOptions<
  TData = unknown,
  TVariables = unknown
> = Omit<UseMutationOptions<TData, TVariables, unknown>, "mutationFn">;

export type TUseQueryCustomOptions<
  TQueryFnData = unknown,
  TData = TQueryFnData
> = Omit<UseQueryOptions<TQueryFnData, TData, QueryKey>, "queryKey">;
