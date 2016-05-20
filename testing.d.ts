import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Action } from '@ngrx/store';
import { Provider } from '@angular/core';
import { StateUpdate } from './state-updates';
export declare class MockStateUpdates extends ReplaySubject<StateUpdate> {
    constructor();
    send(state: any, action: Action): void;
    sendAction(action: Action): void;
    sendState(state: any): void;
}
export declare const MOCK_EFFECTS_PROVIDERS: Provider[];
