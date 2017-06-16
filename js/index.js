$('#star').on('click', function() {
    var date = $('#date').val()
    date = Number(date)
    if (date >= 121 && date <= 220) {
        var attribute = "水瓶喜歡在周遭觀察眾生百態，個性獨立且自主，富有創意與研究精神，但有時因想法標新立異、顛覆傳統，不容易與人群融合，會給人一種獨行俠或不合群的印象。"
        $('#star_sign').val(attribute)
        $('body > div > img:nth-child(5)').show()
        $('body > div > img:nth-child(6)').hide()
        $('body > div > img:nth-child(7)').hide()
        $('body > div > img:nth-child(8)').hide()
        $('body > div > img:nth-child(9)').hide()
        $('body > div > img:nth-child(10)').hide()
        $('body > div > img:nth-child(11)').hide()
        $('body > div > img:nth-child(12)').hide()
        $('body > div > img:nth-child(13)').hide()
        $('body > div > img:nth-child(14)').hide()
        $('body > div > img:nth-child(15)').hide()
        $('body > div > img:nth-child(4)').hide()
    } else if (date >= 221 && date <= 320) {
        var attribute = "雙魚個性包容力強，富有直覺，悲天憫人，容易與人相處，但有時為求凡事融洽，作事缺乏原則，容易受騙上當，甚至有時會有自我催眠或自我欺騙的負面傾向。"
        $('#star_sign').val(attribute)
        $('body > div > img:nth-child(4)').hide()
        $('body > div > img:nth-child(6)').show()
        $('body > div > img:nth-child(7)').hide()
        $('body > div > img:nth-child(8)').hide()
        $('body > div > img:nth-child(9)').hide()
        $('body > div > img:nth-child(10)').hide()
        $('body > div > img:nth-child(11)').hide()
        $('body > div > img:nth-child(12)').hide()
        $('body > div > img:nth-child(13)').hide()
        $('body > div > img:nth-child(14)').hide()
        $('body > div > img:nth-child(15)').hide()
        $('body > div > img:nth-child(5)').hide()
    } else if (date >= 321 && date <= 420) {
        var attribute = "牡羊個性急切，做事講求效率，行動力十足，說做就做，創造性佳，但有時做事三分鐘熱度、缺乏耐性，且過於衝動，容易讓人產生欠缺思慮的不良印象。"
        $('#star_sign').val(attribute)
        $('body > div > img:nth-child(4)').hide()
        $('body > div > img:nth-child(5)').hide()
        $('body > div > img:nth-child(7)').show()
        $('body > div > img:nth-child(8)').hide()
        $('body > div > img:nth-child(9)').hide()
        $('body > div > img:nth-child(10)').hide()
        $('body > div > img:nth-child(11)').hide()
        $('body > div > img:nth-child(12)').hide()
        $('body > div > img:nth-child(13)').hide()
        $('body > div > img:nth-child(14)').hide()
        $('body > div > img:nth-child(15)').hide()
        $('body > div > img:nth-child(6)').hide()
    } else if (date >= 421 && date <= 520) {
        var attribute = "金牛個性趨於保守、務實且傳統。生活較重視物質層面，做事刻苦耐勞，耐力過人。不過有時會給人固執不知變通、做事刻板的感覺，甚至可能有物慾的傾象。"
        $('#star_sign').val(attribute)
        $('body > div > img:nth-child(4)').hide()
        $('body > div > img:nth-child(5)').hide()
        $('body > div > img:nth-child(6)').hide()
        $('body > div > img:nth-child(8)').show()
        $('body > div > img:nth-child(9)').hide()
        $('body > div > img:nth-child(10)').hide()
        $('body > div > img:nth-child(11)').hide()
        $('body > div > img:nth-child(12)').hide()
        $('body > div > img:nth-child(13)').hide()
        $('body > div > img:nth-child(14)').hide()
        $('body > div > img:nth-child(15)').hide()
        $('body > div > img:nth-child(7)').hide()
    } else if (date >= 521 && date <= 620) {
        var attribute = "雙子具洞悉情勢、善於溝通、機智過人、應變能力強的特質。但雙子有時會過於善變，讓人捉摸不定的感覺，做事不夠專注，喜愛談論八卦，因此容易給人浮誇不實，甚至膚淺的印象。"
        $('#star_sign').val(attribute)
        $('body > div > img:nth-child(4)').hide()
        $('body > div > img:nth-child(5)').hide()
        $('body > div > img:nth-child(6)').hide()
        $('body > div > img:nth-child(7)').hide()
        $('body > div > img:nth-child(9)').show()
        $('body > div > img:nth-child(10)').hide()
        $('body > div > img:nth-child(11)').hide()
        $('body > div > img:nth-child(12)').hide()
        $('body > div > img:nth-child(13)').hide()
        $('body > div > img:nth-child(14)').hide()
        $('body > div > img:nth-child(15)').hide()
        $('body > div > img:nth-child(8)').hide()
    } else if (date >= 621 && date <= 720) {
        var attribute = "巨蟹偏好在固定範疇內行事以求得保護與安全感，常是家庭的守護者，個性較念舊敏銳，家庭意識深厚，若無法受到保護與慰藉時，容易產生排外性、防衛心、退縮閉塞的特質。"
        $('#star_sign').val(attribute)
        $('body > div > img:nth-child(4)').hide()
        $('body > div > img:nth-child(5)').hide()
        $('body > div > img:nth-child(6)').hide()
        $('body > div > img:nth-child(7)').hide()
        $('body > div > img:nth-child(8)').hide()
        $('body > div > img:nth-child(10)').show()
        $('body > div > img:nth-child(11)').hide()
        $('body > div > img:nth-child(12)').hide()
        $('body > div > img:nth-child(13)').hide()
        $('body > div > img:nth-child(14)').hide()
        $('body > div > img:nth-child(15)').hide()
        $('body > div > img:nth-child(9)').hide()
    } else if (date >= 721 && date <= 820) {
        var attribute = "獅子個性較為自我，喜愛成為團體的中心或焦點，自尊心強烈，具有領導潛能與優越感。但倘若獅子座無法成為眾人的焦點，為了吸引它人目光，有時容易過度表現、行為誇張。"
        $('#star_sign').val(attribute)
        $('body > div > img:nth-child(4)').hide()
        $('body > div > img:nth-child(5)').hide()
        $('body > div > img:nth-child(6)').hide()
        $('body > div > img:nth-child(7)').hide()
        $('body > div > img:nth-child(8)').hide()
        $('body > div > img:nth-child(9)').hide()
        $('body > div > img:nth-child(11)').show()
        $('body > div > img:nth-child(12)').hide()
        $('body > div > img:nth-child(13)').hide()
        $('body > div > img:nth-child(14)').hide()
        $('body > div > img:nth-child(15)').hide()
        $('body > div > img:nth-child(10)').hide()
    } else if (date >= 821 && date <= 920) {
        var attribute = "處女善於分析整理、識人之明、個性細膩，並追求完美，但當面對無法解構渾沌無規則可循的事物時，常顯現神經質與嘮叨不休的個性。"
        $('#star_sign').val(attribute)
        $('body > div > img:nth-child(4)').hide()
        $('body > div > img:nth-child(5)').hide()
        $('body > div > img:nth-child(6)').hide()
        $('body > div > img:nth-child(7)').hide()
        $('body > div > img:nth-child(8)').hide()
        $('body > div > img:nth-child(9)').hide()
        $('body > div > img:nth-child(10)').hide()
        $('body > div > img:nth-child(12)').show()
        $('body > div > img:nth-child(13)').hide()
        $('body > div > img:nth-child(14)').hide()
        $('body > div > img:nth-child(15)').hide()
        $('body > div > img:nth-child(11)').hide()
    } else if (date >= 921 && date <= 1020) {
        var attribute = "天秤對任何事物抱持著平衡的態度，性格著重公平客觀，對藝術有良好鑑賞力，但有時為取得平衡，容易表現出優柔寡斷的負面形象。"
        $('#star_sign').val(attribute)
        $('body > div > img:nth-child(4)').hide()
        $('body > div > img:nth-child(5)').hide()
        $('body > div > img:nth-child(6)').hide()
        $('body > div > img:nth-child(7)').hide()
        $('body > div > img:nth-child(8)').hide()
        $('body > div > img:nth-child(9)').hide()
        $('body > div > img:nth-child(10)').hide()
        $('body > div > img:nth-child(11)').hide()
        $('body > div > img:nth-child(13)').show()
        $('body > div > img:nth-child(14)').hide()
        $('body > div > img:nth-child(15)').hide()
        $('body > div > img:nth-child(12)').hide()
    } else if (date >= 1021 && date <= 1120) {
        var attribute = "天蠍善於守密，個性沈穩，意志力堅強，深謀遠慮，但受冥王星的陰險特質影響，天蠍座也很容易多疑，善妒，佔有慾強，報復心重，甚至有時會有縱慾的傾向。"
        $('#star_sign').val(attribute)
        $('body > div > img:nth-child(4)').hide()
        $('body > div > img:nth-child(5)').hide()
        $('body > div > img:nth-child(6)').hide()
        $('body > div > img:nth-child(7)').hide()
        $('body > div > img:nth-child(8)').hide()
        $('body > div > img:nth-child(9)').hide()
        $('body > div > img:nth-child(10)').hide()
        $('body > div > img:nth-child(11)').hide()
        $('body > div > img:nth-child(12)').hide()
        $('body > div > img:nth-child(14)').show()
        $('body > div > img:nth-child(15)').hide()
        $('body > div > img:nth-child(13)').hide()
    } else if (date >= 1121 && date <= 1220) {
        var attribute = "射手喜愛思考探索與追尋哲理，個性樂觀，富理想，好自由，但有時常粗心大意，一副無所謂的樣子，令人感到沒有責任感，甚至有時會有過度樂觀的傾向。"
        $('#star_sign').val(attribute)
        $('body > div > img:nth-child(4)').hide()
        $('body > div > img:nth-child(5)').hide()
        $('body > div > img:nth-child(6)').hide()
        $('body > div > img:nth-child(7)').hide()
        $('body > div > img:nth-child(8)').hide()
        $('body > div > img:nth-child(9)').hide()
        $('body > div > img:nth-child(10)').hide()
        $('body > div > img:nth-child(11)').hide()
        $('body > div > img:nth-child(12)').hide()
        $('body > div > img:nth-child(13)').hide()
        $('body > div > img:nth-child(15)').show()
        $('body > div > img:nth-child(14)').hide()
    } else if ((date >= 1221 && date <= 1231) || (date <= 120 && date >= 101)) {
        var attribute = "魔羯具有堅毅的耐力，務實的態度，作事一步一腳印，個性嚴謹、守紀律，但受土星的影響，有時會表現出冷漠、憂鬱、悲觀、壓抑、欠缺浪漫與不易溝通的特質。"
        $('#star_sign').val(attribute)
        $('body > div > img:nth-child(4)').show()
        $('body > div > img:nth-child(5)').hide()
        $('body > div > img:nth-child(6)').hide()
        $('body > div > img:nth-child(7)').hide()
        $('body > div > img:nth-child(8)').hide()
        $('body > div > img:nth-child(9)').hide()
        $('body > div > img:nth-child(10)').hide()
        $('body > div > img:nth-child(11)').hide()
        $('body > div > img:nth-child(12)').hide()
        $('body > div > img:nth-child(13)').hide()
        $('body > div > img:nth-child(14)').hide()
        $('body > div > img:nth-child(15)').hide()
    } else {
        var attribute = "輸入錯誤，請重新輸入生日"
        $('#star_sign').val(attribute)
    }
})

$('#blood').on('click', function() {
    var blood = $('#blood_type').val()
    if ((blood == "o") || (blood == "O")) {
        var characteristic = "小時候多為撒嬌兒，但隨著年紀愈長，愈有自己的主見，而且擇善固執。個性的特質是開朗、不拘小節；做事認真而飄逸，擁有溫暖的人情味，言詞行動都很正直，是令人喜愛的大哥型。唯過於單純，對人的善惡有過敏之嫌。"
        $('#blood_sign').val(characteristic)
        $('body > div > img:nth-child(23)').hide()
        $('body > div > img:nth-child(24)').hide()
        $('body > div > img:nth-child(25)').show()
        $('body > div > img:nth-child(26)').hide()
    } else if ((blood == "b") || (blood == "B")) {
        var characteristic = "小時候隱藏好動的天性，表現斯文，但一方面也愛好熱鬧。年紀漸長以後個性展現坦率與開朗的一面，容易與人親近。交往的朋友往往可以打開心扉，坦誠以對。但是我行我素的開放個性容易被誤解，不過兼具理性與感性的特質，朋友永遠不會少。"
        $('#blood_sign').val(characteristic)
        $('body > div > img:nth-child(23)').hide()
        $('body > div > img:nth-child(24)').show()
        $('body > div > img:nth-child(25)').hide()
        $('body > div > img:nth-child(26)').hide()
    } else if ((blood == "a") || (blood == "A")) {
        var characteristic = "小的時候極為好勝，但經歷挫折後，變得自律，也不易表露感情，給人內向且成熟的感覺。不過，有時太過固執與拘束，不容易在第一次見面給人深刻的好印象。對於朋友的關懷，感受極為敏銳。"
        $('#blood_sign').val(characteristic)
        $('body > div > img:nth-child(23)').show()
        $('body > div > img:nth-child(24)').hide()
        $('body > div > img:nth-child(25)').hide()
        $('body > div > img:nth-child(26)').hide()
    } else if ((blood == "ab") || (blood == "AB")) {
        var characteristic = "自小觀察人的能力極強，長大以後個性變得複雜，旁人不易理解。具幽默感且言語精簡敏銳，是過於認真的誠實型。個性與O型的人正好相反，但極富正義感，受人之託從不推諉，親切是特有的長處。"
        $('#blood_sign').val(characteristic)
        $('body > div > img:nth-child(23)').hide()
        $('body > div > img:nth-child(24)').hide()
        $('body > div > img:nth-child(25)').hide()
        $('body > div > img:nth-child(26)').show()
    } else {
        var characteristic = "輸入錯誤，請重新輸入血型"
        $('#blood_sign').val(characteristic)
    }
})

$('#cal').on('click', function() {
    var i, j, k, l;
    var a = $('#a').val(),
        a = Number(a)
    b = $('#b').val(),
        b = Number(b)
    c = $('#c').val(),
        c = Number(c)
    d = $('#d').val(),
        d = Number(d)
    e = $('#e').val(),
        e = Number(e)
    f = $('#f').val(),
        f = Number(f)
    g = $('#g').val(),
        g = Number(g)
    h = $('#h').val();
    h = Number(h)
    i = a + b + c + d + e + f + g + h;
    j = Math.floor(i / 10);
    k = i - Math.floor(i / 10) * 10;
    l = j + k;
    $('#luckynumber').val(l);
});