declare var FW;

export const PATH = {
    images: FW.Config.submap + 'resources/img/'
};

export const URL = {
    save: ''
};

export const HEADER = {
    default: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-Requested-With': 'XMLHttpRequest'
    }
};

export const PATTERN = {
    email: "[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$"
}
