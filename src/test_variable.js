// WebView에서 InvokeScript의 data로 아래 객체의 parameters 객체가 입력됩니다.
// 동의어 검색 결과를 HTML에게 반환할 때 사용됩니다.
let test_data = {
    command: '@create-table',
    parameters: [{ // parameters[0]
            keyword: 'aa a',
            synonyms: [
                'aaa1',
                'aaa2',
                'aaa3',
            ]
        },
        { // parameters[1]
            keyword: 'bbb',
            synonyms: [
                'bbb1',
                'bbb2',
                'bbb3',
            ]
        },
        { // parameters[2]
            keyword: 'ccc',
            synonyms: [
                'ccc1',
                'ccc2',
                'ccc3',
            ]
        },
    ]
}

let test_data2 = {
    command: '@create-table',
    parameters: [{ // parameters[0]
            keyword: 'patent\\/',
            synonyms: [
            ]
        },
    ]
}

// WebView에서 InvokeScript의 data로 아래 객체의 parameters 객체가 입력됩니다.
// 최초 검색 서비스 제공자 셀렉터를 초기화할 때 사용합니다.
let test_providers_data = {
    command: "@initialize-selector",
    parameters: [
        "Google Patents",
        "USPTO",
        "KIPRIS"
    ],
}
let test_providers_data2 = {
    command: "@initialize-selector",
    parameters: [
        "Google Patents",
        "USPTO",
        "KIPRIS",
        "알로하!!"
    ],
}
let test_providers_data3 = {
    command: "@initialize-selector",
    parameters: ["", "123"],
}

let test_provider_data = {
    command: "@initialize-provider",
    parameters: ["KIPRIS"],
}


let test_miscellaneous_data = {
    command: "@initialize-miscellaneous",
    parameters: [{
            AutoAdd: true
        },
        {
            AutoDelete: true
        },
    ],
}
let test_miscellaneous_data2 = {
    command: "@initialize-miscellaneous",
    parameters: [{
        AutoDelete: true
    }, ],
}
let test_lang_data = {
    command: "@initialize-language",
    parameters: ['ko'],
}