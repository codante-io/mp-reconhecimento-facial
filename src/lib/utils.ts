export function TranslateExpressions(expressions: any) {
    switch (expressions) {
        case "happy":
            return "😁";
        case "angry":
            return "😡";
        case "sad":
            return "😢";
        case "confused":
            return "😵‍💫";
        case "love":
            return "😍";
        case "neutral":
            return "😐";
        case "surprised":
            return "😮";
        case "disgusted":
            return "🤢";
        case "fear":
            return "😨";
        default:
            return "😐";
    }
}
