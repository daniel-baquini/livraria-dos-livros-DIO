import { ControlValueAccessor } from "@angular/forms";

class BaseControlValueAcessor implements ControlValueAccessor {

    protected baseOnChangeFn: (value: any) => void = (value: any) => { }
    protected baseOnTouchedFn: () => void = () => { }
    public value: any

    registerOnChange(fn: any): void {
        this.baseOnChangeFn = (value: any) => {
            fn(value);
        }
    }

    registerOnTouched(fn: any): void {
        this.baseOnTouchedFn = () => {
            fn();
        }
    }

    writeValue(obj: any): void {
        this.value = obj;
    }

}

export default BaseControlValueAcessor