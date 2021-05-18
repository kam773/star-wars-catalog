const units = {
    "height": "cm",
    "films": "films"
}
export const getUnit = (key) => units[key] || null;