let submap = window.location.host === 'craft.dev' || window.location.host === 'localhost' ? '/domein.nl/htdocs/' : '/';

export const PATH = {
    templates: `${submap}angular/`
};

export const HEADER = {
    default: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-Requested-With': 'XMLHttpRequest'
    }
};
