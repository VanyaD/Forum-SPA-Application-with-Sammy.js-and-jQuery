/**
 * Created by vanya on 9/5/2015.
 */

var data = (function () {

    const USERNAME_STORAGE_KEY ='username-key',
        AUTH_KEY_STORAGE_KEY = 'auth-key-key';

    function userLogin(user) {
        var promise = new Promise(function (resolve, reject) {
            $.ajax({
                url: 'api/auth',
                method: 'PUT',
                data: JSON.stringify(user),
                contentType: 'application/json',
                success: function (user) {
                    localStorage.setItem(USERNAME_STORAGE_KEY, user.username);
                    localStorage.setItem(AUTH_KEY_STORAGE_KEY, user.authKey);
                    resolve(user);
                }
            });
        });
        return promise;
    }

    function userRegister(user) {
        var promise = new Promise(function(resolve, reject){
            $.ajax({
                url: 'api/users',
                method: 'POST',
                data: JSON.stringify(user),
                contentType: 'application/json',
                success: function (user) {
                    localStorage.setItem(USERNAME_STORAGE_KEY, user.username);
                    localStorage.setItem(AUTH_KEY_STORAGE_KEY, user.authKey);
                    resolve(user);
                }
            });
        });

        return promise;
    }

    function userLogout() {
        var promise = new Promise(function (resolve, reject) {
            localStorage.removeItem(USERNAME_STORAGE_KEY);
            localStorage.removeItem(AUTH_KEY_STORAGE_KEY);
            resolve();
        });

        return promise;
    }

    function findUser() {

    }

    return {
        users: {
            login: userLogin,
            register: userRegister,
            logout: userLogout,
            find: findUser
        }
    }
}());

