export type Action = {type: "ADD_TOKEN"; payload: string};

export const addToken = (token: string): Action =>({
    type: "ADD_TOKEN",
    payload: token,
}); 

//função addToken com o parâmetro Action cria uma "etiqueta"