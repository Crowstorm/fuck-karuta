

const TextArea = ({ setCodes }) => {

    const onChange = (value) => {
        console.log({ value })
        const lines = value.split(/\r?\n/);
        const codes = lines.map(line => {
            const [, spaceOrCode, code] = line.split(" ");
            if (spaceOrCode === "") {
                return code;
            } else {
                return spaceOrCode
            }
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
            placeholder="🔥 c1h5b2 · ☆☆☆☆ · #11976 · ◈3 · Vlad Love · Mai Vlad Transylvania
            ◾ c1q2vn · ☆☆☆☆ · #47914 · ◈1 · One-Punch Man · Mosquito Girl
            ⚛️ c1vsnz · ★★☆☆ · #5754  · ◈2 · Genshin Impact · Azhdaha
            ◾ c1q39k · ★★☆☆ · #23940 · ◈2 · The Ancient Magus' Bride · Redcurrant
            ◾ cntlgh · ★★☆☆ · #5450  · ◈2 · Fire Emblem: Radiant Dawn · Heather
            💰 cnpbq4 · ★☆☆☆ · #248   · ◈5 · Princess Mononoke · San
            💹 cnr153 · ★☆☆☆ · #16168 · ◈1 · Mother of the Goddess' Dormitory · Fuki Mamoru-kun
            💹 cnz81v · ★★☆☆ · #20020 · ◈2 · Solo Leveling · Yoo Soo-Hyun
            ◾ cnz1qq · ★★☆☆ · #414   · ◈4 · Blue Period · Haruka Hashida
            💮 cnz33l · ★★☆☆ · #48552 · ◈1 · Anohana: The Flower We Saw That Day · Teacher"
        />
    )
}

export default TextArea;