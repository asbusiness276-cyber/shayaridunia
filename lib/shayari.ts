const DEFAULT_SITE_URL = "https://shayaridunia.com";

function resolveSiteUrl() {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!configured) return DEFAULT_SITE_URL;

  try {
    const url = new URL(configured);
    if (url.protocol !== "http:" && url.protocol !== "https:") {
      return DEFAULT_SITE_URL;
    }
    return url.origin;
  } catch {
    return DEFAULT_SITE_URL;
  }
}

export const SITE_URL = resolveSiteUrl();
export const CONTENT_UPDATED_AT = "2026-08-21T00:00:00.000Z";
export const QUOTES_PER_PAGE = 18;

export const languageSlugs = ["hindi", "punjabi", "english"] as const;
export type LanguageSlug = (typeof languageSlugs)[number];

export type Language = {
  slug: LanguageSlug;
  code: "hi" | "pa" | "en";
  label: string;
  nativeLabel: string;
  collectionLabel: string;
  intro: string;
};

export const languages: Record<LanguageSlug, Language> = {
  hindi: {
    slug: "hindi",
    code: "hi",
    label: "Hindi",
    nativeLabel: "हिंदी",
    collectionLabel: "Hindi Shayari",
    intro:
      "दिल की हर बात के लिए चुनी हुई हिंदी शायरी। प्यार, दर्द, दोस्ती, ज़िंदगी और हर खास रिश्ते के लिए 18 सुंदर image cards पढ़ें, समझें और शेयर करें।",
  },
  punjabi: {
    slug: "punjabi",
    code: "pa",
    label: "Punjabi",
    nativeLabel: "ਪੰਜਾਬੀ",
    collectionLabel: "Punjabi Shayari & Status",
    intro:
      "ਪਿਆਰ, ਦਰਦ, ਯਾਰੀ, ਰੁਤਬੇ ਅਤੇ ਜ਼ਿੰਦਗੀ ਦੇ ਹਰ ਰੰਗ ਲਈ ਚੁਣੀ ਹੋਈ ਪੰਜਾਬੀ ਸ਼ਾਇਰੀ। ਹਰ quote ਨਾਲ image, ਸੌਖਾ ਅਰਥ ਅਤੇ share ਕਰਨ ਦੇ options ਮਿਲਣਗੇ।",
  },
  english: {
    slug: "english",
    code: "en",
    label: "English",
    nativeLabel: "English",
    collectionLabel: "English Quotes",
    intro:
      "Thoughtful English quotes for love, heartbreak, friendship, growth, family and every mood. Each collection includes 18 share-ready images and a clear meaning for every quote.",
  },
};

type Localized = Record<LanguageSlug, string>;

export type Emotion = {
  slug: string;
  icon: string;
  label: Localized;
  truth: Localized;
  moment: Localized;
  result: Localized;
};

const emotion = (
  slug: string,
  icon: string,
  hindi: [string, string, string, string],
  punjabi: [string, string, string, string],
  english: [string, string, string, string],
): Emotion => ({
  slug,
  icon,
  label: { hindi: hindi[0], punjabi: punjabi[0], english: english[0] },
  truth: { hindi: hindi[1], punjabi: punjabi[1], english: english[1] },
  moment: { hindi: hindi[2], punjabi: punjabi[2], english: english[2] },
  result: { hindi: hindi[3], punjabi: punjabi[3], english: english[3] },
});

export const emotions: Emotion[] = [
  emotion(
    "love",
    "♡",
    ["प्यार", "दो दिलों का सच्चा भरोसा सबसे मजबूत सहारा बनता है", "किसी अपने का साथ दिल के करीब महसूस होता है", "हर दूरी छोटी और हर दिन खास लगने लगता है"],
    ["ਪਿਆਰ", "ਦੋ ਦਿਲਾਂ ਦਾ ਸੱਚਾ ਭਰੋਸਾ ਸਭ ਤੋਂ ਮਜ਼ਬੂਤ ਸਹਾਰਾ ਬਣਦਾ ਹੈ", "ਕਿਸੇ ਆਪਣੇ ਦਾ ਸਾਥ ਦਿਲ ਦੇ ਨੇੜੇ ਮਹਿਸੂਸ ਹੁੰਦਾ ਹੈ", "ਹਰ ਦੂਰੀ ਛੋਟੀ ਤੇ ਹਰ ਦਿਨ ਖ਼ਾਸ ਲੱਗਣ ਲੱਗਦਾ ਹੈ"],
    ["Love", "honest trust between two hearts becomes the strongest shelter", "someone dear feels close to the heart", "every distance feels smaller and every day feels special"],
  ),
  emotion(
    "romantic",
    "❦",
    ["रोमांटिक", "नर्म एहसास साधारण पलों को खूबसूरत कहानी बना देते हैं", "एक मुस्कान में पूरा अपनापन दिखाई देता है", "दिल हर छोटी बात को यादगार बना लेता है"],
    ["ਰੋਮਾਂਟਿਕ", "ਨਰਮ ਅਹਿਸਾਸ ਸਧਾਰਣ ਪਲਾਂ ਨੂੰ ਸੋਹਣੀ ਕਹਾਣੀ ਬਣਾ ਦਿੰਦੇ ਹਨ", "ਇੱਕ ਮੁਸਕਾਨ ਵਿੱਚ ਪੂਰਾ ਆਪਣਾਪਣ ਦਿਸਦਾ ਹੈ", "ਦਿਲ ਹਰ ਛੋਟੀ ਗੱਲ ਨੂੰ ਯਾਦਗਾਰ ਬਣਾ ਲੈਂਦਾ ਹੈ"],
    ["Romantic", "tender feelings turn ordinary moments into a beautiful story", "one smile reveals a world of affection", "the heart turns every small detail into a memory"],
  ),
  emotion(
    "one-sided-love",
    "◐",
    ["एकतरफ़ा प्यार", "बिना जवाब के भी सच्चा एहसास अपनी गरिमा रखता है", "दिल चुपचाप किसी की खुशी चाहता रहता है", "उम्मीद धीरे-धीरे स्वीकार में बदलने लगती है"],
    ["ਇੱਕ-ਤਰਫ਼ਾ ਪਿਆਰ", "ਬਿਨਾਂ ਜਵਾਬ ਦੇ ਵੀ ਸੱਚਾ ਅਹਿਸਾਸ ਆਪਣੀ ਇੱਜ਼ਤ ਰੱਖਦਾ ਹੈ", "ਦਿਲ ਚੁੱਪਚਾਪ ਕਿਸੇ ਦੀ ਖੁਸ਼ੀ ਮੰਗਦਾ ਰਹਿੰਦਾ ਹੈ", "ਉਮੀਦ ਹੌਲੀ-ਹੌਲੀ ਕਬੂਲ ਕਰਨ ਵਿੱਚ ਬਦਲ ਜਾਂਦੀ ਹੈ"],
    ["One-sided Love", "a sincere feeling keeps its dignity even without an answer", "the heart quietly keeps wishing someone well", "hope slowly grows into acceptance"],
  ),
  emotion(
    "sad",
    "☾",
    ["दर्द", "दर्द को स्वीकार करना संभलने की पहली शुरुआत है", "आँखें चुप रहकर भी पूरी कहानी कह देती हैं", "दिल अपने घावों को धीरे-धीरे समझने लगता है"],
    ["ਦਰਦ", "ਦਰਦ ਨੂੰ ਕਬੂਲ ਕਰਨਾ ਸੰਭਲਣ ਦੀ ਪਹਿਲੀ ਸ਼ੁਰੂਆਤ ਹੈ", "ਅੱਖਾਂ ਚੁੱਪ ਰਹਿ ਕੇ ਵੀ ਪੂਰੀ ਕਹਾਣੀ ਕਹਿ ਦਿੰਦੀਆਂ ਹਨ", "ਦਿਲ ਆਪਣੇ ਜ਼ਖ਼ਮਾਂ ਨੂੰ ਹੌਲੀ-ਹੌਲੀ ਸਮਝਣ ਲੱਗਦਾ ਹੈ"],
    ["Sad", "accepting pain is the first step toward healing", "quiet eyes tell an entire story", "the heart slowly begins to understand its wounds"],
  ),
  emotion(
    "breakup",
    "⌁",
    ["ब्रेकअप", "किसी रिश्ते का अंत अपनी पहचान का अंत नहीं होता", "पुरानी बातें अचानक बहुत दूर लगने लगती हैं", "टूटा दिल फिर से अपने लिए जगह बनाना सीखता है"],
    ["ਬ੍ਰੇਕਅਪ", "ਕਿਸੇ ਰਿਸ਼ਤੇ ਦਾ ਅੰਤ ਆਪਣੀ ਪਛਾਣ ਦਾ ਅੰਤ ਨਹੀਂ ਹੁੰਦਾ", "ਪੁਰਾਣੀਆਂ ਗੱਲਾਂ ਅਚਾਨਕ ਬਹੁਤ ਦੂਰ ਲੱਗਣ ਲੱਗਦੀਆਂ ਹਨ", "ਟੁੱਟਿਆ ਦਿਲ ਮੁੜ ਆਪਣੇ ਲਈ ਥਾਂ ਬਣਾਉਣਾ ਸਿੱਖਦਾ ਹੈ"],
    ["Breakup", "the end of a relationship is not the end of your identity", "old conversations suddenly feel very far away", "a broken heart learns to make room for itself again"],
  ),
  emotion(
    "loneliness",
    "○",
    ["तन्हाई", "अकेले बिताया समय अपने मन को सुनने का अवसर देता है", "भीड़ में भी भीतर की खामोशी सुनाई देती है", "इंसान अपने साथ सहज होना सीखता है"],
    ["ਤਨਹਾਈ", "ਇਕੱਲੇ ਬਿਤਾਇਆ ਸਮਾਂ ਆਪਣੇ ਮਨ ਨੂੰ ਸੁਣਨ ਦਾ ਮੌਕਾ ਦਿੰਦਾ ਹੈ", "ਭੀੜ ਵਿੱਚ ਵੀ ਅੰਦਰਲੀ ਖਾਮੋਸ਼ੀ ਸੁਣਾਈ ਦਿੰਦੀ ਹੈ", "ਇਨਸਾਨ ਆਪਣੇ ਨਾਲ ਸੁਖੀ ਰਹਿਣਾ ਸਿੱਖਦਾ ਹੈ"],
    ["Loneliness", "time alone can become a chance to hear your own mind", "inner silence can be heard even in a crowd", "a person learns to feel at ease with themselves"],
  ),
  emotion(
    "attitude",
    "✦",
    ["एटीट्यूड", "अपने मूल्य को जानना सबसे मजबूत जवाब होता है", "आत्मविश्वास बिना शोर के दिखाई देता है", "दुनिया की राय दिल पर हावी नहीं हो पाती"],
    ["ਐਟੀਟਿਊਡ", "ਆਪਣੀ ਕੀਮਤ ਜਾਣਨਾ ਸਭ ਤੋਂ ਮਜ਼ਬੂਤ ਜਵਾਬ ਹੁੰਦਾ ਹੈ", "ਆਤਮ-ਵਿਸ਼ਵਾਸ ਬਿਨਾਂ ਸ਼ੋਰ ਦੇ ਦਿਸਦਾ ਹੈ", "ਦੁਨੀਆ ਦੀ ਰਾਏ ਦਿਲ ਉੱਤੇ ਹਾਵੀ ਨਹੀਂ ਹੁੰਦੀ"],
    ["Attitude", "knowing your worth is the strongest answer", "confidence shows itself without noise", "other people's opinions stop ruling the heart"],
  ),
  emotion(
    "self-respect",
    "◇",
    ["आत्मसम्मान", "अपनी सीमाओं की रक्षा करना खुद से सच्चा प्रेम है", "दिल गलत व्यवहार के सामने स्पष्ट रहना चुनता है", "सम्मान किसी भी रिश्ते की पहली शर्त बन जाता है"],
    ["ਸਵੈ-ਮਾਣ", "ਆਪਣੀਆਂ ਹੱਦਾਂ ਦੀ ਰੱਖਿਆ ਕਰਨਾ ਆਪਣੇ ਨਾਲ ਸੱਚਾ ਪਿਆਰ ਹੈ", "ਦਿਲ ਗਲਤ ਵਰਤਾਅ ਅੱਗੇ ਸਾਫ਼ ਰਹਿਣਾ ਚੁਣਦਾ ਹੈ", "ਇੱਜ਼ਤ ਹਰ ਰਿਸ਼ਤੇ ਦੀ ਪਹਿਲੀ ਸ਼ਰਤ ਬਣ ਜਾਂਦੀ ਹੈ"],
    ["Self-respect", "protecting your boundaries is an honest form of self-love", "the heart chooses clarity in the face of poor treatment", "respect becomes the first condition of every relationship"],
  ),
  emotion(
    "friendship",
    "∞",
    ["दोस्ती", "सच्चा दोस्त मुश्किल समय को हल्का बना देता है", "बिना कहे भी मन की बात समझ ली जाती है", "सफर हँसी और भरोसे से भर जाता है"],
    ["ਯਾਰੀ", "ਸੱਚਾ ਦੋਸਤ ਔਖੇ ਵੇਲੇ ਨੂੰ ਹੌਲਾ ਕਰ ਦਿੰਦਾ ਹੈ", "ਬਿਨਾਂ ਕਹੇ ਵੀ ਦਿਲ ਦੀ ਗੱਲ ਸਮਝ ਲਈ ਜਾਂਦੀ ਹੈ", "ਸਫ਼ਰ ਹਾਸੇ ਅਤੇ ਭਰੋਸੇ ਨਾਲ ਭਰ ਜਾਂਦਾ ਹੈ"],
    ["Friendship", "a true friend makes difficult times feel lighter", "feelings are understood without needing an explanation", "the journey fills with laughter and trust"],
  ),
  emotion(
    "separation",
    "↟",
    ["जुदाई", "दूरी रिश्ते की गहराई को साफ़ दिखा देती है", "किसी की कमी हर रोज़ महसूस होती है", "यादें दिल को साथ निभाने का तरीका सिखाती हैं"],
    ["ਜੁਦਾਈ", "ਦੂਰੀ ਰਿਸ਼ਤੇ ਦੀ ਗਹਿਰਾਈ ਸਾਫ਼ ਦਿਖਾ ਦਿੰਦੀ ਹੈ", "ਕਿਸੇ ਦੀ ਕਮੀ ਹਰ ਰੋਜ਼ ਮਹਿਸੂਸ ਹੁੰਦੀ ਹੈ", "ਯਾਦਾਂ ਦਿਲ ਨੂੰ ਸਾਥ ਨਿਭਾਉਣ ਦਾ ਢੰਗ ਸਿਖਾਉਂਦੀਆਂ ਹਨ"],
    ["Separation", "distance reveals the true depth of a bond", "someone's absence is felt every day", "memories teach the heart another way to stay connected"],
  ),
  emotion(
    "memories",
    "⌛",
    ["यादें", "बीता हुआ अच्छा पल समय से बड़ा हो जाता है", "कोई पुरानी खुशबू अचानक लौट आती है", "दिल कुछ क्षणों को हमेशा के लिए संभाल लेता है"],
    ["ਯਾਦਾਂ", "ਬੀਤਿਆ ਸੋਹਣਾ ਪਲ ਸਮੇਂ ਤੋਂ ਵੱਡਾ ਹੋ ਜਾਂਦਾ ਹੈ", "ਕੋਈ ਪੁਰਾਣੀ ਖੁਸ਼ਬੂ ਅਚਾਨਕ ਮੁੜ ਆਉਂਦੀ ਹੈ", "ਦਿਲ ਕੁਝ ਪਲਾਂ ਨੂੰ ਹਮੇਸ਼ਾਂ ਲਈ ਸੰਭਾਲ ਲੈਂਦਾ ਹੈ"],
    ["Memories", "a beautiful past moment can become larger than time", "an old scent suddenly returns", "the heart keeps certain moments forever"],
  ),
  emotion(
    "praise",
    "✧",
    ["तारीफ़", "सच्ची प्रशंसा खूबसूरती से आगे व्यक्तित्व को देखती है", "किसी की अच्छाई दिल को सहज छू जाती है", "एक ईमानदार बात आत्मविश्वास बढ़ा देती है"],
    ["ਤਾਰੀਫ਼", "ਸੱਚੀ ਤਾਰੀਫ਼ ਸੋਹਣੇਪਣ ਤੋਂ ਅੱਗੇ ਸ਼ਖ਼ਸੀਅਤ ਨੂੰ ਵੇਖਦੀ ਹੈ", "ਕਿਸੇ ਦੀ ਚੰਗਿਆਈ ਦਿਲ ਨੂੰ ਸਹਿਜ ਛੂਹ ਜਾਂਦੀ ਹੈ", "ਇੱਕ ਸੱਚੀ ਗੱਲ ਆਤਮ-ਵਿਸ਼ਵਾਸ ਵਧਾ ਦਿੰਦੀ ਹੈ"],
    ["Praise", "genuine admiration notices character beyond appearance", "someone's goodness touches the heart naturally", "one honest compliment can strengthen confidence"],
  ),
  emotion(
    "life",
    "⌘",
    ["ज़िंदगी", "हर बदलता दिन एक नया अर्थ लेकर आता है", "रास्ता योजना से अलग दिशा ले लेता है", "इंसान अनुभव से अपना संतुलन बनाना सीखता है"],
    ["ਜ਼ਿੰਦਗੀ", "ਹਰ ਬਦਲਦਾ ਦਿਨ ਨਵਾਂ ਅਰਥ ਲੈ ਕੇ ਆਉਂਦਾ ਹੈ", "ਰਾਹ ਯੋਜਨਾ ਤੋਂ ਵੱਖਰੀ ਦਿਸ਼ਾ ਲੈ ਲੈਂਦਾ ਹੈ", "ਇਨਸਾਨ ਤਜਰਬੇ ਨਾਲ ਆਪਣਾ ਸੰਤੁਲਨ ਬਣਾਉਣਾ ਸਿੱਖਦਾ ਹੈ"],
    ["Life", "every changing day arrives with a new meaning", "the road turns away from the original plan", "experience teaches a person to find balance"],
  ),
  emotion(
    "motivation",
    "↑",
    ["हौसला", "छोटा लगातार प्रयास बड़े बदलाव की नींव रखता है", "थकान के बाद भी एक कदम आगे बढ़ाया जाता है", "मुश्किल लक्ष्य संभव दिखाई देने लगता है"],
    ["ਹੌਸਲਾ", "ਛੋਟੀ ਪਰ ਲਗਾਤਾਰ ਕੋਸ਼ਿਸ਼ ਵੱਡੇ ਬਦਲਾਅ ਦੀ ਨੀਂਹ ਰੱਖਦੀ ਹੈ", "ਥਕਾਵਟ ਤੋਂ ਬਾਅਦ ਵੀ ਇੱਕ ਕਦਮ ਅੱਗੇ ਵਧਾਇਆ ਜਾਂਦਾ ਹੈ", "ਔਖਾ ਮਕਸਦ ਸੰਭਵ ਦਿਸਣ ਲੱਗਦਾ ਹੈ"],
    ["Motivation", "small consistent effort lays the foundation for real change", "one more step is taken even after exhaustion", "a difficult goal begins to look possible"],
  ),
  emotion(
    "success",
    "◆",
    ["कामयाबी", "अनुशासन सपनों को रोज़ थोड़ा वास्तविक बनाता है", "मेहनत को तुरंत तालियाँ नहीं मिलतीं", "परिणाम धीरे-धीरे तैयारी का सम्मान करने लगता है"],
    ["ਕਾਮਯਾਬੀ", "ਅਨੁਸ਼ਾਸਨ ਸੁਪਨਿਆਂ ਨੂੰ ਹਰ ਰੋਜ਼ ਥੋੜ੍ਹਾ ਸੱਚ ਬਣਾਉਂਦਾ ਹੈ", "ਮਿਹਨਤ ਨੂੰ ਤੁਰੰਤ ਤਾਲੀਆਂ ਨਹੀਂ ਮਿਲਦੀਆਂ", "ਨਤੀਜਾ ਹੌਲੀ-ਹੌਲੀ ਤਿਆਰੀ ਦੀ ਕਦਰ ਕਰਨ ਲੱਗਦਾ ਹੈ"],
    ["Success", "discipline makes a dream slightly more real each day", "hard work does not receive instant applause", "results slowly begin to honour the preparation"],
  ),
  emotion(
    "nature",
    "❋",
    ["प्रकृति", "धरती की सादगी मन को फिर से संतुलित करती है", "हवा और पेड़ों के बीच कुछ समय बिताया जाता है", "भीतर का शोर अपने आप धीमा पड़ जाता है"],
    ["ਕੁਦਰਤ", "ਧਰਤੀ ਦੀ ਸਾਦਗੀ ਮਨ ਨੂੰ ਮੁੜ ਸੰਤੁਲਿਤ ਕਰਦੀ ਹੈ", "ਹਵਾ ਅਤੇ ਰੁੱਖਾਂ ਵਿਚਕਾਰ ਕੁਝ ਸਮਾਂ ਬਿਤਾਇਆ ਜਾਂਦਾ ਹੈ", "ਅੰਦਰਲਾ ਸ਼ੋਰ ਆਪਣੇ ਆਪ ਹੌਲਾ ਹੋ ਜਾਂਦਾ ਹੈ"],
    ["Nature", "the simplicity of the earth restores balance to the mind", "time is spent among wind and trees", "the noise within naturally becomes quieter"],
  ),
  emotion(
    "childhood",
    "◡",
    ["बचपन", "बेफिक्र दिनों की छोटी खुशियाँ जीवन भर साथ रहती हैं", "पुराने खेल और गलियाँ याद आती हैं", "चेहरे पर बिना वजह मुस्कान लौट आती है"],
    ["ਬਚਪਨ", "ਬੇਫ਼ਿਕਰ ਦਿਨਾਂ ਦੀਆਂ ਛੋਟੀਆਂ ਖੁਸ਼ੀਆਂ ਉਮਰ ਭਰ ਨਾਲ ਰਹਿੰਦੀਆਂ ਹਨ", "ਪੁਰਾਣੀਆਂ ਖੇਡਾਂ ਅਤੇ ਗਲੀਆਂ ਯਾਦ ਆਉਂਦੀਆਂ ਹਨ", "ਚਿਹਰੇ ਉੱਤੇ ਬਿਨਾਂ ਕਾਰਨ ਮੁਸਕਾਨ ਮੁੜ ਆ ਜਾਂਦੀ ਹੈ"],
    ["Childhood", "the small joys of carefree days remain for a lifetime", "old games and familiar lanes return to mind", "an unplanned smile finds its way back"],
  ),
  emotion(
    "old-age",
    "♧",
    ["बुढ़ापा", "अनुभव से भरी उम्र जीवन को धीमी लेकिन गहरी नज़र देती है", "पुराने किस्से नए धैर्य के साथ सुनाए जाते हैं", "हर साधारण दिन की कीमत समझ आने लगती है"],
    ["ਬੁਢਾਪਾ", "ਤਜਰਬੇ ਨਾਲ ਭਰੀ ਉਮਰ ਜ਼ਿੰਦਗੀ ਨੂੰ ਹੌਲੀ ਪਰ ਡੂੰਘੀ ਨਜ਼ਰ ਦਿੰਦੀ ਹੈ", "ਪੁਰਾਣੇ ਕਿੱਸੇ ਨਵੇਂ ਸਬਰ ਨਾਲ ਸੁਣਾਏ ਜਾਂਦੇ ਹਨ", "ਹਰ ਸਧਾਰਣ ਦਿਨ ਦੀ ਕੀਮਤ ਸਮਝ ਆਉਣ ਲੱਗਦੀ ਹੈ"],
    ["Growing Older", "a life rich in experience brings a slower but deeper view", "old stories are told with fresh patience", "the value of an ordinary day becomes clear"],
  ),
  emotion(
    "rain",
    "☂",
    ["बारिश", "भीगी मिट्टी की खुशबू भूली भावनाएँ जगा देती है", "खिड़की पर बूंदें धीरे-धीरे बजती हैं", "यादें और सुकून एक साथ लौट आते हैं"],
    ["ਮੀਂਹ", "ਭਿੱਜੀ ਮਿੱਟੀ ਦੀ ਖੁਸ਼ਬੂ ਭੁੱਲੇ ਅਹਿਸਾਸ ਜਗਾ ਦਿੰਦੀ ਹੈ", "ਖਿੜਕੀ ਉੱਤੇ ਬੂੰਦਾਂ ਹੌਲੀ-ਹੌਲੀ ਵੱਜਦੀਆਂ ਹਨ", "ਯਾਦਾਂ ਅਤੇ ਸਕੂਨ ਇਕੱਠੇ ਮੁੜ ਆ ਜਾਂਦੇ ਹਨ"],
    ["Rain", "the scent of wet earth awakens forgotten feelings", "raindrops tap softly against the window", "memory and calm return together"],
  ),
  emotion(
    "tea",
    "♨",
    ["चाय", "एक गर्म कप थके दिन को छोटा-सा विराम देता है", "भाप के साथ बातचीत खुलने लगती है", "साधारण शाम भी अपनापन दे जाती है"],
    ["ਚਾਹ", "ਇੱਕ ਗਰਮ ਕੱਪ ਥੱਕੇ ਦਿਨ ਨੂੰ ਛੋਟਾ ਜਿਹਾ ਵਿਰਾਮ ਦਿੰਦਾ ਹੈ", "ਭਾਫ਼ ਦੇ ਨਾਲ ਗੱਲਬਾਤ ਖੁੱਲ੍ਹਣ ਲੱਗਦੀ ਹੈ", "ਸਧਾਰਣ ਸ਼ਾਮ ਵੀ ਆਪਣਾਪਣ ਦੇ ਜਾਂਦੀ ਹੈ"],
    ["Tea", "a warm cup gives a tired day a gentle pause", "conversation opens with the rising steam", "an ordinary evening begins to feel comforting"],
  ),
  emotion(
    "morning",
    "☀",
    ["सुप्रभात", "नई सुबह बीते दिन से आगे बढ़ने का अवसर देती है", "पहली रोशनी कमरे में उतरती है", "मन उम्मीद के लिए फिर से खुल जाता है"],
    ["ਸ਼ੁਭ ਸਵੇਰ", "ਨਵੀਂ ਸਵੇਰ ਬੀਤੇ ਦਿਨ ਤੋਂ ਅੱਗੇ ਵਧਣ ਦਾ ਮੌਕਾ ਦਿੰਦੀ ਹੈ", "ਪਹਿਲੀ ਰੌਸ਼ਨੀ ਕਮਰੇ ਵਿੱਚ ਉਤਰਦੀ ਹੈ", "ਮਨ ਉਮੀਦ ਲਈ ਮੁੜ ਖੁੱਲ੍ਹ ਜਾਂਦਾ ਹੈ"],
    ["Good Morning", "a new morning offers a chance to move beyond yesterday", "the first light enters the room", "the mind opens itself to hope again"],
  ),
  emotion(
    "night",
    "☽",
    ["शुभ रात्रि", "शांत रात मन को दिन की थकान उतारने देती है", "आसमान के नीचे गति धीमी पड़ जाती है", "नींद से पहले दिल को सुकून मिल जाता है"],
    ["ਸ਼ੁਭ ਰਾਤ", "ਸ਼ਾਂਤ ਰਾਤ ਮਨ ਨੂੰ ਦਿਨ ਦੀ ਥਕਾਵਟ ਉਤਾਰਣ ਦਿੰਦੀ ਹੈ", "ਅਸਮਾਨ ਹੇਠ ਰਫ਼ਤਾਰ ਹੌਲੀ ਹੋ ਜਾਂਦੀ ਹੈ", "ਨੀਂਦ ਤੋਂ ਪਹਿਲਾਂ ਦਿਲ ਨੂੰ ਸਕੂਨ ਮਿਲ ਜਾਂਦਾ ਹੈ"],
    ["Good Night", "a quiet night lets the mind release the weight of the day", "the pace slows beneath the sky", "the heart finds calm before sleep"],
  ),
  emotion(
    "festival",
    "✺",
    ["त्योहार", "मिलकर मनाई खुशी रिश्तों को भीतर तक रोशन करती है", "घर में अपने लोग और हँसी इकट्ठा होते हैं", "छोटी परंपराएँ बड़ी यादें बन जाती हैं"],
    ["ਤਿਉਹਾਰ", "ਮਿਲ ਕੇ ਮਨਾਈ ਖੁਸ਼ੀ ਰਿਸ਼ਤਿਆਂ ਨੂੰ ਅੰਦਰ ਤੱਕ ਰੌਸ਼ਨ ਕਰਦੀ ਹੈ", "ਘਰ ਵਿੱਚ ਆਪਣੇ ਲੋਕ ਅਤੇ ਹਾਸਾ ਇਕੱਠੇ ਹੁੰਦੇ ਹਨ", "ਛੋਟੀਆਂ ਰਸਮਾਂ ਵੱਡੀਆਂ ਯਾਦਾਂ ਬਣ ਜਾਂਦੀਆਂ ਹਨ"],
    ["Festival", "shared joy lights relationships from within", "loved ones and laughter gather at home", "small traditions become lasting memories"],
  ),
  emotion(
    "family",
    "⌂",
    ["परिवार", "अपनों का भरोसा कठिन दिनों में सुरक्षित जगह बनता है", "घर लौटते ही मन हल्का महसूस करता है", "हर परेशानी बाँटने लायक लगने लगती है"],
    ["ਪਰਿਵਾਰ", "ਆਪਣਿਆਂ ਦਾ ਭਰੋਸਾ ਔਖੇ ਦਿਨਾਂ ਵਿੱਚ ਸੁਰੱਖਿਅਤ ਥਾਂ ਬਣਦਾ ਹੈ", "ਘਰ ਮੁੜਦੇ ਹੀ ਮਨ ਹੌਲਾ ਮਹਿਸੂਸ ਕਰਦਾ ਹੈ", "ਹਰ ਪਰੇਸ਼ਾਨੀ ਵੰਡਣ ਯੋਗ ਲੱਗਣ ਲੱਗਦੀ ਹੈ"],
    ["Family", "the trust of loved ones becomes a safe place on difficult days", "the mind feels lighter upon returning home", "every worry begins to feel shareable"],
  ),
  emotion(
    "mother",
    "❀",
    ["माँ", "माँ का निस्वार्थ साथ जीवन की पहली सुरक्षित जगह होता है", "एक परिचित आवाज़ चिंता कम कर देती है", "दिल फिर से बच्चे जैसा निश्चिंत हो जाता है"],
    ["ਮਾਂ", "ਮਾਂ ਦਾ ਨਿਸ਼ਕਾਮ ਸਾਥ ਜ਼ਿੰਦਗੀ ਦੀ ਪਹਿਲੀ ਸੁਰੱਖਿਅਤ ਥਾਂ ਹੁੰਦਾ ਹੈ", "ਇੱਕ ਜਾਣੀ-ਪਛਾਣੀ ਆਵਾਜ਼ ਚਿੰਤਾ ਘੱਟ ਕਰ ਦਿੰਦੀ ਹੈ", "ਦਿਲ ਮੁੜ ਬੱਚੇ ਵਾਂਗ ਬੇਫ਼ਿਕਰ ਹੋ ਜਾਂਦਾ ਹੈ"],
    ["Mother", "a mother's selfless care is life's first safe place", "one familiar voice softens every worry", "the heart feels carefree like a child again"],
  ),
  emotion(
    "father",
    "♜",
    ["पिता", "पिता का शांत सहारा अक्सर शब्दों से अधिक कहता है", "कठिन राह में मजबूत हाथ साथ दिखाई देता है", "जिम्मेदारी डर के बजाय दिशा देने लगती है"],
    ["ਪਿਤਾ", "ਪਿਤਾ ਦਾ ਚੁੱਪ ਸਹਾਰਾ ਅਕਸਰ ਲਫ਼ਜ਼ਾਂ ਤੋਂ ਵੱਧ ਕਹਿੰਦਾ ਹੈ", "ਔਖੇ ਰਾਹ ਵਿੱਚ ਮਜ਼ਬੂਤ ਹੱਥ ਨਾਲ ਦਿਸਦਾ ਹੈ", "ਜ਼ਿੰਮੇਵਾਰੀ ਡਰ ਦੀ ਥਾਂ ਦਿਸ਼ਾ ਦੇਣ ਲੱਗਦੀ ਹੈ"],
    ["Father", "a father's quiet support often says more than words", "a steady hand appears on a difficult road", "responsibility begins to offer direction instead of fear"],
  ),
  emotion(
    "brother-sister",
    "⇄",
    ["भाई-बहन", "नोकझोंक के पीछे जीवन भर का अपनापन छुपा रहता है", "पुरानी शरारत पर फिर से हँसी आती है", "रिश्ता दूरी में भी सहज बना रहता है"],
    ["ਭੈਣ-ਭਰਾ", "ਨੋਕਝੋਕ ਦੇ ਪਿੱਛੇ ਉਮਰ ਭਰ ਦਾ ਆਪਣਾਪਣ ਲੁਕਿਆ ਰਹਿੰਦਾ ਹੈ", "ਪੁਰਾਣੀ ਸ਼ਰਾਰਤ ਉੱਤੇ ਮੁੜ ਹਾਸਾ ਆ ਜਾਂਦਾ ਹੈ", "ਰਿਸ਼ਤਾ ਦੂਰੀ ਵਿੱਚ ਵੀ ਸੁਭਾਵਿਕ ਬਣਿਆ ਰਹਿੰਦਾ ਹੈ"],
    ["Siblings", "lifelong affection often hides behind playful arguments", "an old prank brings laughter back", "the bond stays natural even across distance"],
  ),
  emotion(
    "birthday",
    "✷",
    ["जन्मदिन", "दिल से दी शुभकामना किसी उत्सव को व्यक्तिगत बना देती है", "किसी अपने की नई उम्र का दिन आता है", "दुआ और खुशी एक ही संदेश में मिल जाती है"],
    ["ਜਨਮਦਿਨ", "ਦਿਲੋਂ ਦਿੱਤੀ ਵਧਾਈ ਕਿਸੇ ਜਸ਼ਨ ਨੂੰ ਨਿੱਜੀ ਬਣਾ ਦਿੰਦੀ ਹੈ", "ਕਿਸੇ ਆਪਣੇ ਦੀ ਨਵੀਂ ਉਮਰ ਦਾ ਦਿਨ ਆਉਂਦਾ ਹੈ", "ਦੁਆ ਅਤੇ ਖੁਸ਼ੀ ਇੱਕੋ ਸੁਨੇਹੇ ਵਿੱਚ ਮਿਲ ਜਾਂਦੇ ਹਨ"],
    ["Birthday", "a heartfelt wish makes a celebration deeply personal", "a loved one's new year begins", "hope and happiness meet in one message"],
  ),
  emotion(
    "patriotism",
    "✺",
    ["देश प्रेम", "देश से प्रेम जिम्मेदारी और सेवा से पूरा होता है", "अपनी मिट्टी की गरिमा याद रखी जाती है", "व्यक्तिगत लाभ से पहले कर्तव्य दिखाई देने लगता है"],
    ["ਦੇਸ਼ ਪ੍ਰੇਮ", "ਦੇਸ਼ ਨਾਲ ਪਿਆਰ ਜ਼ਿੰਮੇਵਾਰੀ ਅਤੇ ਸੇਵਾ ਨਾਲ ਪੂਰਾ ਹੁੰਦਾ ਹੈ", "ਆਪਣੀ ਮਿੱਟੀ ਦੀ ਸ਼ਾਨ ਯਾਦ ਰੱਖੀ ਜਾਂਦੀ ਹੈ", "ਨਿੱਜੀ ਲਾਭ ਤੋਂ ਪਹਿਲਾਂ ਫ਼ਰਜ਼ ਦਿਸਣ ਲੱਗਦਾ ਹੈ"],
    ["Patriotism", "love for one's country is completed through responsibility and service", "the dignity of one's homeland is remembered", "duty becomes visible before personal gain"],
  ),
  emotion(
    "two-line",
    "〝",
    ["दो लाइन", "कम शब्दों में गहरा अर्थ सबसे सीधा असर छोड़ता है", "दो पंक्तियाँ पूरा एहसास कह देती हैं", "बात बिना भटके सीधे दिल तक पहुँचती है"],
    ["ਦੋ ਲਾਈਨਾਂ", "ਘੱਟ ਲਫ਼ਜ਼ਾਂ ਵਿੱਚ ਡੂੰਘਾ ਅਰਥ ਸਭ ਤੋਂ ਸਿੱਧਾ ਅਸਰ ਛੱਡਦਾ ਹੈ", "ਦੋ ਲਾਈਨਾਂ ਪੂਰਾ ਅਹਿਸਾਸ ਕਹਿ ਦਿੰਦੀਆਂ ਹਨ", "ਗੱਲ ਬਿਨਾਂ ਭਟਕੇ ਸਿੱਧੀ ਦਿਲ ਤੱਕ ਪਹੁੰਚਦੀ ਹੈ"],
    ["Two-line", "a deep meaning in few words leaves the clearest impact", "two lines express an entire feeling", "the message reaches the heart without wandering"],
  ),
  emotion(
    "motivational",
    "⭐",
    ["प्रेरणादायक", "सच्ची मेहनत और लगन से हर नामुमकिन मंज़िल हासिल की जा सकती है", "हौसला टूटने के बाद भी एक नई उम्मीद जागती है", "हर हार एक नई और बड़ी जीत की तैयारी बन जाती है"],
    ["ਮੋਟੀਵੇਸ਼ਨਲ", "ਸੱਚੀ ਮਿਹਨਤ ਅਤੇ ਲਗਨ ਨਾਲ ਹਰ ਨਾਮੁਮਕਿਨ ਮੰਜ਼ਿਲ ਹਾਸਿਲ ਕੀਤੀ ਜਾ ਸਕਦੀ ਹੈ", "ਹੌਂਸਲਾ ਟੁੱਟਣ ਤੋਂ ਬਾਅਦ ਵੀ ਇੱਕ ਨਵੀਂ ਉਮੀਦ ਜਾਗਦੀ ਹੈ", "ਹਰ ਹਾਰ ਇੱਕ ਨਵੀਂ ਅਤੇ ਵੱਡੀ ਜਿੱਤ ਦੀ ਤਿਆਰੀ ਬਣ ਜਾਂਦੀ ਹੈ"],
    ["Motivational", "true hard work and dedication can achieve every impossible goal", "a new hope awakens even after courage breaks", "every defeat becomes preparation for a new and bigger victory"],
  ),
];

const quoteTemplates: Record<LanguageSlug, Array<(e: Emotion) => string>> = {
  hindi: [
    (e) => `${e.label.hindi} सिर्फ़ एक लफ़्ज़ नहीं,\nक्योंकि ${e.truth.hindi}।`,
    (e) => `जब ${e.moment.hindi},\nतब ${e.result.hindi}।`,
    (e) => `${e.label.hindi} की खामोशी भी कहती है,\n${e.truth.hindi}।`,
    (e) => `कुछ पल इसलिए याद रहते हैं,\nक्योंकि ${e.moment.hindi}।`,
    (e) => `दिल ने आज फिर माना,\n${e.truth.hindi}।`,
    (e) => `जहाँ ${e.moment.hindi},\nवहाँ ${e.result.hindi}।`,
    (e) => `${e.label.hindi} का असली रंग तभी दिखता है,\nजब ${e.moment.hindi}।`,
    (e) => `वक़्त बदलता रहा,\nपर सच यही रहा कि ${e.truth.hindi}।`,
    (e) => `${e.label.hindi} हमें सिखाता है,\nकि ${e.result.hindi}।`,
    (e) => `एक छोटी-सी बात ने बता दिया,\n${e.truth.hindi}।`,
    (e) => `शोर बहुत था दुनिया में,\nसुकून मिला जब ${e.moment.hindi}।`,
    (e) => `${e.label.hindi} की सबसे खूबसूरत बात,\n${e.result.hindi}।`,
    (e) => `हर रास्ता आसान नहीं होता,\nफिर भी ${e.result.hindi}।`,
    (e) => `आज का एहसास बस इतना है,\n${e.truth.hindi}।`,
    (e) => `कुछ रिश्ते नाम से नहीं,\nउस पल से पहचाने जाते हैं जब ${e.moment.hindi}।`,
    (e) => `जब मन थक जाए,\nयाद रखना कि ${e.truth.hindi}।`,
    (e) => `यादों ने धीरे से कहा,\n${e.moment.hindi} तो समय ठहर जाता है।`,
    (e) => `${e.label.hindi} का अर्थ इतना-सा है,\n${e.result.hindi}।`,
  ],
  punjabi: [
    (e) => `${e.label.punjabi} ਸਿਰਫ਼ ਇੱਕ ਲਫ਼ਜ਼ ਨਹੀਂ,\nਕਿਉਂਕਿ ${e.truth.punjabi}।`,
    (e) => `ਜਦੋਂ ${e.moment.punjabi},\nਤਾਂ ${e.result.punjabi}।`,
    (e) => `${e.label.punjabi} ਦੀ ਖਾਮੋਸ਼ੀ ਵੀ ਕਹਿੰਦੀ ਹੈ,\n${e.truth.punjabi}।`,
    (e) => `ਕੁਝ ਪਲ ਇਸ ਲਈ ਯਾਦ ਰਹਿੰਦੇ ਹਨ,\nਕਿਉਂਕਿ ${e.moment.punjabi}।`,
    (e) => `ਦਿਲ ਨੇ ਅੱਜ ਫਿਰ ਮੰਨਿਆ,\n${e.truth.punjabi}।`,
    (e) => `ਜਿੱਥੇ ${e.moment.punjabi},\nਉੱਥੇ ${e.result.punjabi}।`,
    (e) => `${e.label.punjabi} ਦਾ ਅਸਲੀ ਰੰਗ ਉਦੋਂ ਦਿਸਦਾ ਹੈ,\nਜਦੋਂ ${e.moment.punjabi}।`,
    (e) => `ਵਕ਼ਤ ਬਦਲਦਾ ਰਿਹਾ,\nਪਰ ਸੱਚ ਇਹੀ ਰਿਹਾ ਕਿ ${e.truth.punjabi}।`,
    (e) => `${e.label.punjabi} ਸਾਨੂੰ ਸਿਖਾਉਂਦਾ ਹੈ,\nਕਿ ${e.result.punjabi}।`,
    (e) => `ਇੱਕ ਛੋਟੀ ਜਿਹੀ ਗੱਲ ਨੇ ਦੱਸ ਦਿੱਤਾ,\n${e.truth.punjabi}।`,
    (e) => `ਦੁਨੀਆ ਵਿੱਚ ਸ਼ੋਰ ਬਹੁਤ ਸੀ,\nਸਕੂਨ ਮਿਲਿਆ ਜਦੋਂ ${e.moment.punjabi}।`,
    (e) => `${e.label.punjabi} ਦੀ ਸਭ ਤੋਂ ਸੋਹਣੀ ਗੱਲ,\n${e.result.punjabi}।`,
    (e) => `ਹਰ ਰਾਹ ਸੌਖਾ ਨਹੀਂ ਹੁੰਦਾ,\nਫਿਰ ਵੀ ${e.result.punjabi}।`,
    (e) => `ਅੱਜ ਦਾ ਅਹਿਸਾਸ ਬਸ ਇੰਨਾ ਹੈ,\n${e.truth.punjabi}।`,
    (e) => `ਕੁਝ ਰਿਸ਼ਤੇ ਨਾਮ ਨਾਲ ਨਹੀਂ,\nਉਸ ਪਲ ਨਾਲ ਪਛਾਣੇ ਜਾਂਦੇ ਹਨ ਜਦੋਂ ${e.moment.punjabi}।`,
    (e) => `ਜਦੋਂ ਮਨ ਥੱਕ ਜਾਵੇ,\nਯਾਦ ਰੱਖੋ ਕਿ ${e.truth.punjabi}।`,
    (e) => `ਯਾਦਾਂ ਨੇ ਹੌਲੀ ਜਿਹੀ ਆਖਿਆ,\n${e.moment.punjabi} ਤਾਂ ਸਮਾਂ ਰੁਕ ਜਾਂਦਾ ਹੈ।`,
    (e) => `${e.label.punjabi} ਦਾ ਅਰਥ ਬਸ ਇੰਨਾ ਹੈ,\n${e.result.punjabi}।`,
  ],
  english: [
    (e) => `${e.label.english} is more than a word,\nbecause ${e.truth.english}.`,
    (e) => `When ${e.moment.english},\n${e.result.english}.`,
    (e) => `Even the silence of ${e.label.english.toLowerCase()} says\nthat ${e.truth.english}.`,
    (e) => `Some moments stay with us\nbecause ${e.moment.english}.`,
    (e) => `The heart admits it once again:\n${e.truth.english}.`,
    (e) => `Where ${e.moment.english},\n${e.result.english}.`,
    (e) => `The truest shade of ${e.label.english.toLowerCase()} appears\nwhen ${e.moment.english}.`,
    (e) => `Time kept changing,\nbut ${e.truth.english}.`,
    (e) => `${e.label.english} teaches us\nthat ${e.result.english}.`,
    (e) => `One small moment made it clear:\n${e.truth.english}.`,
    (e) => `The world was full of noise;\npeace arrived when ${e.moment.english}.`,
    (e) => `The loveliest part of ${e.label.english.toLowerCase()} is this:\n${e.result.english}.`,
    (e) => `Not every road is easy,\nyet ${e.result.english}.`,
    (e) => `Today's feeling is simple:\n${e.truth.english}.`,
    (e) => `Some bonds are known by the moment\nwhen ${e.moment.english}.`,
    (e) => `When the mind grows tired, remember:\n${e.truth.english}.`,
    (e) => `Memory whispered softly:\nwhen ${e.moment.english}, time stands still.`,
    (e) => `${e.label.english} can mean just this:\n${e.result.english}.`,
  ],
};

const explanationTemplates: Record<LanguageSlug, Array<(e: Emotion) => string>> = {
  hindi: [
    (e) => `यह शायरी ${e.label.hindi} को एक गहरे अनुभव के रूप में देखती है। इसका संदेश है कि ${e.truth.hindi}।`,
    (e) => `इन पंक्तियों में उस पल की बात है जब ${e.moment.hindi}। ऐसे समय में ${e.result.hindi}।`,
    (e) => `यह भाव बताता है कि खामोशी भी ${e.label.hindi} की पूरी कहानी कह सकती है। असली अर्थ शब्दों से अधिक महसूस होता है।`,
    (e) => `यह शायरी साधारण दिखने वाले पल की अहमियत समझाती है। जब ${e.moment.hindi}, वह क्षण याद बन जाता है।`,
    (e) => `इन शब्दों का अर्थ है कि ${e.truth.hindi}। दिल इस सच्चाई को अनुभव के बाद और साफ़ समझता है।`,
    (e) => `यह पंक्ति माहौल और भावना के रिश्ते को दिखाती है। जहाँ ${e.moment.hindi}, वहाँ ${e.result.hindi}।`,
    (e) => `यहाँ ${e.label.hindi} की पहचान किसी दिखावे से नहीं, बल्कि उस समय से होती है जब ${e.moment.hindi}।`,
    (e) => `यह शायरी बदलते समय के बीच एक स्थायी सच रखती है: ${e.truth.hindi}।`,
    (e) => `इसका सीधा संदेश है कि ${e.result.hindi}। यही ${e.label.hindi} हमें भीतर से सिखाता है।`,
    (e) => `एक छोटी घटना कभी-कभी बड़ा अर्थ खोल देती है। यहाँ वही अर्थ है कि ${e.truth.hindi}।`,
    (e) => `यह शायरी बाहरी शोर के बीच मिलने वाले निजी सुकून की बात करती है, खासकर जब ${e.moment.hindi}।`,
    (e) => `इन पंक्तियों में ${e.label.hindi} की सुंदरता उसके असर में है। नतीजा यह होता है कि ${e.result.hindi}।`,
    (e) => `यह भाव मुश्किल रास्ते को नकारता नहीं है। यह याद दिलाता है कि फिर भी ${e.result.hindi}।`,
    (e) => `आज के एहसास को सरल शब्दों में रखा गया है: ${e.truth.hindi}। यही इस शायरी का केंद्र है।`,
    () => `यह शायरी बताती है कि कुछ रिश्तों की पहचान नाम से नहीं, साझा अनुभव से होती है।`,
    (e) => `थके मन के लिए यह पंक्ति एक शांत याद दिलाती है कि ${e.truth.hindi}।`,
    (e) => `यहाँ याद और समय को जोड़ा गया है। जब ${e.moment.hindi}, कोई पल भीतर हमेशा के लिए ठहर जाता है।`,
    (e) => `अंतिम अर्थ बहुत सीधा है: ${e.result.hindi}। कम शब्दों में यही ${e.label.hindi} की पूरी भावना है।`,
  ],
  punjabi: [
    (e) => `ਇਹ ਸ਼ਾਇਰੀ ${e.label.punjabi} ਨੂੰ ਇੱਕ ਡੂੰਘੇ ਤਜਰਬੇ ਵਜੋਂ ਵੇਖਦੀ ਹੈ। ਇਸਦਾ ਸੁਨੇਹਾ ਹੈ ਕਿ ${e.truth.punjabi}।`,
    (e) => `ਇਨ੍ਹਾਂ ਲਾਈਨਾਂ ਵਿੱਚ ਉਸ ਪਲ ਦੀ ਗੱਲ ਹੈ ਜਦੋਂ ${e.moment.punjabi}। ਅਜਿਹੇ ਵੇਲੇ ${e.result.punjabi}।`,
    (e) => `ਇਹ ਭਾਵ ਦੱਸਦਾ ਹੈ ਕਿ ਖਾਮੋਸ਼ੀ ਵੀ ${e.label.punjabi} ਦੀ ਪੂਰੀ ਕਹਾਣੀ ਕਹਿ ਸਕਦੀ ਹੈ। ਅਸਲੀ ਅਰਥ ਲਫ਼ਜ਼ਾਂ ਤੋਂ ਵੱਧ ਮਹਿਸੂਸ ਹੁੰਦਾ ਹੈ।`,
    (e) => `ਇਹ ਸ਼ਾਇਰੀ ਸਧਾਰਣ ਦਿਸਦੇ ਪਲ ਦੀ ਅਹਿਮੀਅਤ ਸਮਝਾਉਂਦੀ ਹੈ। ਜਦੋਂ ${e.moment.punjabi}, ਉਹ ਪਲ ਯਾਦ ਬਣ ਜਾਂਦਾ ਹੈ।`,
    (e) => `ਇਨ੍ਹਾਂ ਲਫ਼ਜ਼ਾਂ ਦਾ ਅਰਥ ਹੈ ਕਿ ${e.truth.punjabi}। ਦਿਲ ਇਸ ਸੱਚ ਨੂੰ ਤਜਰਬੇ ਤੋਂ ਬਾਅਦ ਹੋਰ ਸਾਫ਼ ਸਮਝਦਾ ਹੈ।`,
    (e) => `ਇਹ ਪੰਕਤੀ ਮਾਹੌਲ ਅਤੇ ਅਹਿਸਾਸ ਦਾ ਰਿਸ਼ਤਾ ਦਿਖਾਉਂਦੀ ਹੈ। ਜਿੱਥੇ ${e.moment.punjabi}, ਉੱਥੇ ${e.result.punjabi}।`,
    (e) => `ਇੱਥੇ ${e.label.punjabi} ਦੀ ਪਛਾਣ ਦਿਖਾਵੇ ਨਾਲ ਨਹੀਂ, ਉਸ ਵੇਲੇ ਨਾਲ ਹੁੰਦੀ ਹੈ ਜਦੋਂ ${e.moment.punjabi}।`,
    (e) => `ਇਹ ਸ਼ਾਇਰੀ ਬਦਲਦੇ ਸਮੇਂ ਵਿਚਕਾਰ ਇੱਕ ਪੱਕਾ ਸੱਚ ਰੱਖਦੀ ਹੈ: ${e.truth.punjabi}।`,
    (e) => `ਇਸਦਾ ਸਿੱਧਾ ਸੁਨੇਹਾ ਹੈ ਕਿ ${e.result.punjabi}। ਇਹੀ ${e.label.punjabi} ਸਾਨੂੰ ਅੰਦਰੋਂ ਸਿਖਾਉਂਦਾ ਹੈ।`,
    (e) => `ਇੱਕ ਛੋਟੀ ਘਟਨਾ ਕਈ ਵਾਰ ਵੱਡਾ ਅਰਥ ਖੋਲ੍ਹ ਦਿੰਦੀ ਹੈ। ਇੱਥੇ ਉਹੀ ਅਰਥ ਹੈ ਕਿ ${e.truth.punjabi}।`,
    (e) => `ਇਹ ਸ਼ਾਇਰੀ ਬਾਹਰਲੇ ਸ਼ੋਰ ਵਿਚਕਾਰ ਮਿਲਦੇ ਨਿੱਜੀ ਸਕੂਨ ਦੀ ਗੱਲ ਕਰਦੀ ਹੈ, ਖਾਸ ਕਰਕੇ ਜਦੋਂ ${e.moment.punjabi}।`,
    (e) => `ਇਨ੍ਹਾਂ ਲਾਈਨਾਂ ਵਿੱਚ ${e.label.punjabi} ਦੀ ਸੋਹਣੀ ਗੱਲ ਉਸਦੇ ਅਸਰ ਵਿੱਚ ਹੈ। ਨਤੀਜਾ ਇਹ ਹੈ ਕਿ ${e.result.punjabi}।`,
    (e) => `ਇਹ ਭਾਵ ਔਖੇ ਰਾਹ ਨੂੰ ਨਕਾਰਦਾ ਨਹੀਂ। ਇਹ ਯਾਦ ਦਿਵਾਉਂਦਾ ਹੈ ਕਿ ਫਿਰ ਵੀ ${e.result.punjabi}।`,
    (e) => `ਅੱਜ ਦੇ ਅਹਿਸਾਸ ਨੂੰ ਸੌਖੇ ਲਫ਼ਜ਼ਾਂ ਵਿੱਚ ਰੱਖਿਆ ਗਿਆ ਹੈ: ${e.truth.punjabi}।`,
    () => `ਇਹ ਸ਼ਾਇਰੀ ਦੱਸਦੀ ਹੈ ਕਿ ਕੁਝ ਰਿਸ਼ਤੇ ਨਾਮ ਨਾਲ ਨਹੀਂ, ਸਾਂਝੇ ਤਜਰਬੇ ਨਾਲ ਪਛਾਣੇ ਜਾਂਦੇ ਹਨ।`,
    (e) => `ਥੱਕੇ ਮਨ ਲਈ ਇਹ ਪੰਕਤੀ ਸ਼ਾਂਤ ਯਾਦ ਦਿਵਾਉਂਦੀ ਹੈ ਕਿ ${e.truth.punjabi}।`,
    (e) => `ਇੱਥੇ ਯਾਦ ਅਤੇ ਸਮੇਂ ਨੂੰ ਜੋੜਿਆ ਗਿਆ ਹੈ। ਜਦੋਂ ${e.moment.punjabi}, ਕੋਈ ਪਲ ਅੰਦਰ ਹਮੇਸ਼ਾਂ ਲਈ ਟਿਕ ਜਾਂਦਾ ਹੈ।`,
    (e) => `ਆਖ਼ਰੀ ਅਰਥ ਬਹੁਤ ਸਿੱਧਾ ਹੈ: ${e.result.punjabi}। ਘੱਟ ਲਫ਼ਜ਼ਾਂ ਵਿੱਚ ਇਹੀ ${e.label.punjabi} ਦੀ ਪੂਰੀ ਭਾਵਨਾ ਹੈ।`,
  ],
  english: [
    (e) => `This quote treats ${e.label.english.toLowerCase()} as a lived experience. Its central message is that ${e.truth.english}.`,
    (e) => `These lines focus on the moment when ${e.moment.english}. In that moment, ${e.result.english}.`,
    (e) => `The quote suggests that silence can carry the whole story of ${e.label.english.toLowerCase()}. The meaning is felt beyond the words.`,
    (e) => `This thought explains why an ordinary moment can matter so much. When ${e.moment.english}, it becomes a lasting memory.`,
    (e) => `The meaning is simple: ${e.truth.english}. Experience often helps the heart understand that truth more clearly.`,
    (e) => `This line connects atmosphere with emotion. Where ${e.moment.english}, ${e.result.english}.`,
    (e) => `Here, ${e.label.english.toLowerCase()} is recognised through a real moment rather than a display, especially when ${e.moment.english}.`,
    (e) => `The quote holds on to one steady truth while time changes: ${e.truth.english}.`,
    (e) => `Its direct message is that ${e.result.english}. That is the inner lesson carried by ${e.label.english.toLowerCase()}.`,
    (e) => `A small event can reveal a large meaning. Here, that meaning is that ${e.truth.english}.`,
    (e) => `This quote is about finding private calm inside a noisy world, especially when ${e.moment.english}.`,
    (e) => `These lines place the beauty of ${e.label.english.toLowerCase()} in its effect: ${e.result.english}.`,
    (e) => `The thought does not deny that the road can be hard. It reminds us that ${e.result.english}.`,
    (e) => `Today's feeling is expressed in one clear idea: ${e.truth.english}.`,
    () => `This quote says some bonds are defined by shared experience, not merely by the name given to them.`,
    (e) => `For a tired mind, this line offers a quiet reminder that ${e.truth.english}.`,
    (e) => `Memory and time meet in this thought. When ${e.moment.english}, a moment can stay within us forever.`,
    (e) => `The final meaning is direct: ${e.result.english}. In a few words, it carries the full feeling of ${e.label.english.toLowerCase()}.`,
  ],
};

export type Quote = {
  id: string;
  index: number;
  language: LanguageSlug;
  emotion: string;
  text: string;
  explanation: string;
  imageUrl: string;
};

export function isLanguage(value: string): value is LanguageSlug {
  return languageSlugs.includes(value as LanguageSlug);
}

export function getEmotion(slug: string) {
  return emotions.find((item) => item.slug === slug);
}

export function getQuotes(language: LanguageSlug, selectedEmotion: Emotion): Quote[] {
  return quoteTemplates[language].map((template, index) => ({
    id: `${language}-${selectedEmotion.slug}-${index + 1}`,
    index: index + 1,
    language,
    emotion: selectedEmotion.slug,
    text: template(selectedEmotion),
    explanation: explanationTemplates[language][index](selectedEmotion),
    imageUrl: `/card/${language}/${selectedEmotion.slug}/${index + 1}`,
  }));
}

export function getFeaturedQuotes(language?: LanguageSlug): Quote[] {
  const selected = emotions.slice(0, QUOTES_PER_PAGE);
  return selected.map((selectedEmotion, index) => {
    const currentLanguage = language ?? languageSlugs[index % languageSlugs.length];
    const quote = getQuotes(currentLanguage, selectedEmotion)[index % QUOTES_PER_PAGE];
    return quote;
  });
}

export function getPageHeading(language: LanguageSlug, selectedEmotion: Emotion) {
  if (language === "hindi") return `${selectedEmotion.label.hindi} Shayari in Hindi`;
  if (language === "punjabi") return `${selectedEmotion.label.punjabi} Shayari & Punjabi Status`;
  return `${selectedEmotion.label.english} Quotes in English`;
}

export function getPageDescription(language: LanguageSlug, selectedEmotion: Emotion) {
  if (language === "hindi") {
    return `${selectedEmotion.label.hindi} पर 18 original Hindi shayari पढ़ें। हर शायरी के साथ share-ready image, आसान explanation, copy और download option।`;
  }
  if (language === "punjabi") {
    return `${selectedEmotion.label.punjabi} ਲਈ 18 original Punjabi shayari ਅਤੇ status ਪੜ੍ਹੋ। ਹਰ quote ਨਾਲ image, ਸੌਖਾ meaning, copy ਅਤੇ download option।`;
  }
  return `Read 18 original ${selectedEmotion.label.english.toLowerCase()} quotes in English. Every quote includes a share-ready image, a clear meaning, copy and download options.`;
}

export function emotionHue(slug: string) {
  let hash = 0;
  for (const character of slug) hash = (hash * 31 + character.charCodeAt(0)) % 360;
  return hash;
}
