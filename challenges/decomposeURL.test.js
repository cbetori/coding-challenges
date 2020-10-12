/*
Create a function named that takes a string (URL) as input. Decompose the string and return an object with the following properties:

protocol: This is the url protocol (e.g. "http").
ipAdress: Should contain IP address (if valid) of URL or null.
subDomain: Should contain subDomain of URL (e.g. "www" or null).
domainName: Should contain domain without subDomain (e.g. "google.com" or null).
folderTree: Should contain an array of folders (e.g. "www.google.com/test/image/index.html" ➞ ["test", "image"] or null)
targetFile: Should return targeted file.
e.g. 1. "www.google.com/test/image" ➞ "image"
e.g. 2. "www.google.com/test/index.html" ➞ "index.html" or null
argumentsFile: Should return arguments of targetedFile.
e.g. "www.google.com/test/image?search=ok" ➞ "?search=ok" or null
*/

const objURL={
        protocol: undefined,
        ipAdress: undefined,
        subDomain: undefined,
        domainName: undefined,
        folderTree: undefined,
        targetFile: undefined,
        argumentsFile: undefined
}

const decomposeURL=(str)=>{
    const result = {...objURL}
    result.protocol = protocolURL(str, result)
    result.ipAdress= ipAdressURL(str, result)
    result.subDomain= subDomainURL(str, result)
    result.domainName= domainNameURL(str, result)
    result.folderTree= folderTreeURL(str, result)
    result.targetFile= targetFileURL(str, result)
    result.argumentsFile= argumentsFileURL(str, result)
    return result
}

const protocolURL=(str, obj)=>{
    for(let i=0; i<str.length; i++){
        if(str[i] === ':') {
            return str.slice(0, i)
        }
    }
    return null
}

const ipAdressURL=(str, obj)=>{
    let result = null
    let array = str.split('/')
    for(let i=0; i<array.length; i++){
        let count = 0
        for(let x=0; x<array[i].length; x++){
            if(array[i][x] === '.'){
                count++
            }
            if (count === 3){
                result = array[i]
            }
        }
    }
    if(result !== null){
        result = result.split(':')
        result = result[0]
    }
    return result
}

const subDomainURL=(str, obj)=>{
    let result
    let strStart = 0
    let strEnd = 0
    for(let i=0;i<str.length; i++){
        if(str.slice([i-2], [i]) === '//'){
            strStart = i
        }
        if(str[i]==='/' && strStart !== 0){
            strEnd = i
            break
        }
    }
    let string = str.slice(strStart, strEnd)
    let count = 0
        for(let i=0; i<string.length; i++){
        if(string[i] === '.'){
            count++
            if(count === 1 ) result = string.slice(0, i)
        }
    }
    if(strStart === 0 || strEnd ===0 || count === 1) return null
    return result
}

const domainNameURL=(str, obj)=>{
    let result 
    let strStart = 0
    let strEnd = 0
    for(let i=0;i<str.length; i++){
        if(str.slice([i-2], [i]) === '//'){
            strStart = i
        }
        if(str[i]==='/' && strStart !== 0){
            strEnd = i
            break
        }
    }
    if(obj.subDomain === null) result = str.slice(strStart, strEnd)
    if(obj.subDomain !== null) result = str.slice(strStart+obj.subDomain.length+1, strEnd)
    if(strStart === 0 || strEnd === 0) return null
    return result
}

const folderTreeURL=(str, obj)=>{
    let result = []
    let array = str.split('/')
    let delimiters = [':','?','#','[',']','@', '.']
    for(let i=0; i<array.length-1; i++){
        let test = true
        for(let x=0; x<delimiters.length;x++){
            if(array[i].includes(delimiters[x])) test = false
            if(array[i] === '') test = false
        }
        if(test) result.push(array[i])
    }
    return result
}

const targetFileURL=(str)=>{
    let array = str.split('/')
    let result = array[array.length-1]
    for(let i=0; i<array.length; i++){
        console.log(array[i])
        if(array[i].includes('.js')) console.log(true)
        if(array[i].includes('.js')) result = array[i].slice(0, array[i].indexOf('.')+3) 
        if(array[i].includes('.html')) result = array[i].slice(0, array[i].indexOf('.')+5) 
    }
    return result
}

const argumentsFileURL=(str)=>{
    let array = str.split('/')
    let delimiters = [':','?','#','[',']','@']
    let result = null
    for(let i=0; i<array.length; i++){
        for(let x=0; x<delimiters.length;x++){
            if(array[i].includes(delimiters[x])){
            if(array[i].includes('.js')) result = array[i].slice(array[i].indexOf('.')+3, array[i].length) 
            if(array[i].includes('.html')) result = array[i].slice(array[i].indexOf('.')+5, array[i].length) 
            if(result !== null ) break
            }
        }
    }
    return result
}

test('decompose URL #1', ()=>{
    expect(decomposeURL("https://www.google.com/search/test.js?ok=1")).toEqual({  
    protocol: "https",
    ipAdress: null,
    subDomain: "www",
    domainName: "google.com",
    folderTree: ['search'],
    targetFile: "test.js",
    argumentsFile: "?ok=1"})
})

test('decompose URL #2', ()=>{
    expect(decomposeURL("https://edabit.com/new/challenge")).toEqual({
        protocol: "https",
        ipAdress: null,
        subDomain: null,
        domainName: "edabit.com",
        folderTree: ['new'],
        targetFile: "challenge",
        argumentsFile: null
      })
})

test('decompose URL #3', ()=>{
    expect(decomposeURL("https://edabit.com/new/challenge/test.html")).toEqual({
        protocol: "https",
        ipAdress: null,
        subDomain: null,
        domainName: "edabit.com",
        folderTree: ['new', 'challenge'],
        targetFile: "test.html",
        argumentsFile: null
      })
})
