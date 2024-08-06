export const devToolMap = (mode:string) => {
    if(mode === 'development'){
        return "inline-source-map"
    }
    else{
        return false
    }
}