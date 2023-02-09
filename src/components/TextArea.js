

const TextArea = ({ setCodes }) => {

    const onChange = (value) => {
        console.log({ value })
        const lines = value.split(/\r?\n/);
        const codes = lines.map(line => {
            const [, code] = line.split(" ");
            return code;
        })
        if (codes) {
            setCodes(codes)
        }
    }

    return (
        <textarea
            style={{ width: '50%' }}
            rows={30}
            onChange={(e) => onChange(e.target.value)}
        />
    )
}

export default TextArea;