/**
  tüm kullanıcıları içeren bir DİZİ ye çözümlenir, tüm kullanıcılar { user_id, username } içerir
 */
  const db=require("../../data/db-config");

 function bul() {
return db("users");
}

/**
  verilen filtreye sahip tüm kullanıcıları içeren bir DİZİ ye çözümlenir
 */
 function goreBul(filtre) {
  return db("users").where(filtre);
}

/**
  verilen user_id li kullanıcıya çözümlenir, kullanıcı { user_id, username } içerir
 */
async function idyeGoreBul(user_id) {
  const result = await db('user').where('user_id', user_id).first();  //resolves to an object
    return result;
}

/**
  yeni eklenen kullanıcıya çözümlenir { user_id, username }
 */
async function ekle(user) {
  let [user_id] = await db('user').insert(user);
  const newEmployee = await idyeGoreBul(user_id);
  return newEmployee;
}

// Diğer modüllerde kullanılabilmesi için fonksiyonları "exports" nesnesine eklemeyi unutmayın.
module.exports={
  ekle,bul,goreBul,idyeGoreBul
}