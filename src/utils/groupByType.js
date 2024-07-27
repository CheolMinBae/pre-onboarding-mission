const groupByType = (data) => {
    return data.reduce((acc, { type, ...rest }) => {
        acc[type] = acc[type] || [];
        acc[type].push({ type, ...rest });
        return acc;
    }, {});
};

export default groupByType;
