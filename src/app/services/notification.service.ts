import { Injectable } from "@angular/core";
import { Feedback } from "nativescript-feedback";

@Injectable()
export class NotificationService {
    private readonly feedback: Feedback = new Feedback();

    public showSuccessMessage(message: string, duration: number = 1000): void {
        this.feedback.success({
            message: message,
            duration: duration
        });
    }
}
