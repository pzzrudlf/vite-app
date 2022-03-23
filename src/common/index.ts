import md5 from 'md5'

export type ConfigType = {
    url: string,
    method: string,
    data: any
}
export const getRequestKey = (config: ConfigType) => {
    if (!config) {
        return md5(+new Date())
    }
    const data = typeof config.data == 'string' ? config.data : JSON.stringify(config.data)
    return md5(config.url + '&' + config.method + '&' + data)
}

//检查key值
export const checkPending = (key: string, pending:any):boolean => {
    return !!pending[key]
}
//删除key值
export const removePending = (key: string, pending:any) => {
    delete pending[key]
}
