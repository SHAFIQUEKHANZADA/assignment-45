import{ mag_name } from '../Task no.41(Magicians)'

function make_great() {
    mag_name.splice(3, 0, "The Great")
    console.log(mag_name)
}
make_great()