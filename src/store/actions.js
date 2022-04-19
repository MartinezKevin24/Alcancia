export const INSERT_COIN = "INSERT_COIN";
export const RESET_PIGGY = "RESET_PIGGY";

export const insertCoin = (coins) => {
    return{
        type: INSERT_COIN,
        payload: coins
    }
}

export const resetPiggy = () => {
    return{
        type: RESET_PIGGY
    }
}