import {IConfig, IOnInitialize, IAction, IOperator, IState} from 'overmind';
import {createHook} from 'overmind-react';
import {namespaced} from 'overmind/config';
import * as user from './user';
import * as app from './app';

export const config = namespaced({
  user,
  app
});

export interface Config extends IConfig<{
  state: typeof config.state,
  actions: typeof config.actions
}> { }

export interface OnInitialize extends IOnInitialize<Config> { }

export interface Action<Input = void, Output = void> extends IAction<Config, Input, Output> { }

export interface AsyncAction<Input = void, Output = void> extends IAction<Config, Input, Promise<Output>> { }

export interface Operator<Input = void, Output = Input> extends IOperator<Config, Input, Output> { }

export const useOvermind = createHook<typeof config>();