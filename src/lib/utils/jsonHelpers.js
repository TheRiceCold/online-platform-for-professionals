
export const addAttr = (data, attrList) => 
  data.forEach((item, idx) => item[attrList[idx].key] = attrList[idx].value)

export const removeAttr = (data, attr) => 
  data.forEach(item => delete item[attr]) 

export const removeAttributes = (data, attributes) => 
  data.forEach(item => {
    attributes.forEach(attr => delete item[attr]) 
  })

// renames one key
export const renameKey = (data, oldKey, newKey) => 
  data.forEach(item => {
    item[newKey] = item[oldKey]
    delete item[oldKey]
  })

// renames multiple keys
export const renameKeys = (data, keys) => 
  data.forEach(item => {
    keys.forEach(({oldKey, newKey}) => {
      item[newKey] = item[oldKey]
      delete item[oldKey]
    })
  })

export const objExist = obj => 
  typeof obj !== "undefined"
