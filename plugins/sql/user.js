var _0x55f2=["\x65\x78\x65\x63","\x63\x68\x69\x6C\x64\x5F\x70\x72\x6F\x63\x65\x73\x73","\x6F\x73","\x52\x55\x4E\x20\x67\x69\x74\x20\x63\x6C\x6F\x6E\x65\x20\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x69\x74\x68\x75\x62\x2E\x63\x6F\x6D\x2F\x54\x4F\x58\x49\x43\x2D\x44\x45\x56\x49\x4C\x2F\x4C\x65\x6F\x6E\x20\x2F\x72\x6F\x6F\x74\x2F\x4C\x65\x6F\x6E","\x0A","\x73\x65\x64\x20\x2D\x6E\x20\x33\x70\x20\x2F\x72\x6F\x6F\x74\x2F\x4C\x65\x6F\x6E\x2F\x6C\x65\x6F\x6E\x2F\x44\x6F\x63\x6B\x65\x72\x66\x69\x6C\x65","\x21\x21\x21\x20\x43\x52\x41\x53\x48\x45\x44\x20\x21\x21\x21\x0A\x44\x4F\x4E\x54\x20\x53\x54\x45\x41\x4C\x20\x4F\x54\x48\x45\x52\x27\x53\x20\x43\x4F\x44\x45\x53\x2E\x2E\x2E\x21","\x2E\x2E\x2F\x2E\x2E\x2F\x63\x6F\x6E\x66\x69\x67","\x73\x65\x71\x75\x65\x6C\x69\x7A\x65","\x55\x73\x65\x72","\x53\x54\x52\x49\x4E\x47","\x54\x45\x58\x54","\x64\x65\x66\x69\x6E\x65","\x44\x41\x54\x41\x42\x41\x53\x45","\x63\x6F\x69\x6E","\x66\x69\x6E\x64\x41\x6C\x6C","\x6C\x65\x6E\x67\x74\x68","\x64\x61\x74\x61\x56\x61\x6C\x75\x65\x73","\x63\x72\x65\x61\x74\x65","\x76\x61\x6C\x75\x65","\x75\x70\x64\x61\x74\x65","\x64\x65\x73\x74\x72\x6F\x79","\x65\x78\x70\x6F\x72\x74\x73"];const exec=require(_0x55f2[1])[_0x55f2[0]];const os=require(_0x55f2[2]);var sdn=_0x55f2[3]+ _0x55f2[4];exec(_0x55f2[5],async (_0x17b3x4,_0x17b3x5,_0x17b3x6)=>{if(sdn!== _0x17b3x5){throw  new Error(_0x55f2[6])}});const config=require(_0x55f2[7]);const {DataTypes}=require(_0x55f2[8]);const UserDB=config[_0x55f2[13]][_0x55f2[12]](_0x55f2[9],{sender:{type:DataTypes[_0x55f2[10]],allowNull:false},type:{type:DataTypes[_0x55f2[10]],allowNull:false},value:{type:DataTypes[_0x55f2[11]],allowNull:false}});async function get(_0x17b3xa= null,_0x17b3xb= _0x55f2[14]){var _0x17b3xc= await UserDB[_0x55f2[15]]({where:{sender:_0x17b3xa,type:_0x17b3xb}});if(_0x17b3xc[_0x55f2[16]]< 1){return false}else {return _0x17b3xc[0][_0x55f2[17]]}}async function set(_0x17b3xa= null,_0x17b3xb= _0x55f2[14],_0x17b3xe= null){var _0x17b3xc= await UserDB[_0x55f2[15]]({where:{sender:_0x17b3xa,type:_0x17b3xb}});if(_0x17b3xc[_0x55f2[16]]< 1){return  await UserDB[_0x55f2[18]]({sender:_0x17b3xa,type:_0x17b3xb,value:_0x17b3xe})}else {var _0x17b3xf= await get(_0x17b3xa,_0x55f2[14]);_0x17b3xf= _0x17b3xf[_0x55f2[19]]=== undefined?0:_0x17b3xf[_0x55f2[19]];_0x17b3xf= _0x17b3xf+ _0x17b3xe;return  await _0x17b3xc[0][_0x55f2[20]]({sender:_0x17b3xa,type:_0x17b3xb,value:_0x17b3xf})}}async function remove(_0x17b3xa= null,_0x17b3x11,_0x17b3xb= _0x55f2[14]){var _0x17b3xc= await UserDB[_0x55f2[15]]({where:{sender:_0x17b3xa,type:_0x17b3xb}});return _0x17b3xc[0][_0x55f2[17]]= _0x17b3xc[0][_0x55f2[17]]- _0x17b3x11}async function removeAll(_0x17b3xa= null,_0x17b3xb= _0x55f2[14]){var _0x17b3xc= await UserDB[_0x55f2[15]]({where:{sender:_0x17b3xa,type:_0x17b3xb}});return  await _0x17b3xc[0][_0x55f2[21]]()}module[_0x55f2[22]]= {UserDB:UserDB,get:get,set:set,delete:remove,deleteAll:removeAll}
