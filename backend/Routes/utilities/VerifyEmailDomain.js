function verifyEmailDomain(email, organizationName) {
    const emailDomain = email.split('@')[1];
    const organizationDomain = organizationName.toLowerCase().replace(/\s/g, '');

    const regex = new RegExp(`^${organizationDomain.replace(/\./g, '\\.')}(\\.[a-z]+)*$`, 'i');
    return regex.test(emailDomain);
}

module.exports = {
    verifyEmailDomain
}