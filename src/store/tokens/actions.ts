//envia o token
export type Action = {type: "ADD_TOKEN"; payload: string};

//armazena o token
export const addToken = (token: string): Action =>({
    type: "ADD_TOKEN",
    payload: token,
}); 