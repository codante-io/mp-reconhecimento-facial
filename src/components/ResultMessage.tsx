export default function ResultMessage({ expression }: { expression: string }) {
    const message: { [key: string]: JSX.Element } = {
        happy: (
            <>
                Você está <span className="text-black">feliz.</span> Aproveite!
            </>
        ),
        angry: (
            <>
                Por que a sua expressão é{" "}
                <span className="text-black">brava.</span>
            </>
        ),
        sad: (
            <>
                Você está um pouco <span className="text-black">triste.</span>{" "}
                hoje...
            </>
        ),
        love: (
            <>
                Hoje você está <span className="text-black">amoroso.</span>
            </>
        ),
        neutral: (
            <>
                Você está <span className="text-black">neutro.</span>
            </>
        ),
        surprised: (
            <>
                Paree que há alguma{" "}
                <span className="text-black">surpresa.</span> por aí!
            </>
        ),
        disgusted: (
            <>
                Sua expressão é <span className="text-black">enjoada.</span>
            </>
        ),
        fearful: (
            <>
                Do que você tem <span className="text-black">medo.</span>
            </>
        ),
    };

    return <>{message[expression]}</>;
}
