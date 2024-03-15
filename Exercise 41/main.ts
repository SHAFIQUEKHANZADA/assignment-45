let mag_name: string[] = ["Harry Houdini", "Derren Brown", "Dynamo"]

function see_mag(magicin: string[]) {
    mag_name.forEach(mag_name => {
        console.log(mag_name)
    })
}
see_mag(mag_name)
export {mag_name};
