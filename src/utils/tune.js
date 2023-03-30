function joinPerformances(tune, morePerformances) {
    let performance = tune.performance;
    if (!Object.hasOwn(performance, "label")) {
        performance.label = tune.composer || tune.performer;
    }

    if (morePerformances) {
        return [performance, ...morePerformances];
    } else {
        return [performance];
    }
}

export function unpack(tune) {
    if (!tune) return tune;
    const subsection = tune.subsections[0];
    return {
        id: tune.id,
        name: tune.name,
        composer: tune.composer,
        rate: subsection.rate,
        performances: joinPerformances(tune, subsection.performances),
    };
}
