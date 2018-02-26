import { Injectable, EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Injectable()
export class ValueAccessorService<T> implements ControlValueAccessor {
    public modelWrites: EventEmitter<T>  = new EventEmitter<T>();
    private _model: T;
    public onChanged: (m: T | number) => void;
    public onTouched: (m: T) => void;

    constructor() {}

    writeValue(value: T): void {
        this._model = value;
        this.modelWrites.emit(value);
    }

    registerOnChange(fn: () => void): void {
        this.onChanged = fn;
    }

    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    get model(): T {
        return this._model;
    }

    set(value: T): void {
        this._model = Object.assign({}, value);

        if (this.onChanged) {
            this.onChanged(this._model);
        }
    }
}
