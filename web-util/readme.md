
# Web Util

## Ajax

Provides a nice wrapper for XMLHttpRequest.

| Name | Description |
| - | - |
| ajax(ajax_opts) | Performs XMLHttpRequest, returns Promise |
| setCustomHeaders | Sets custom http headers that are included with each request |

### ajax_opts
| Key | Description|
| - | - |
| method | "GET", "POST"... |
| url | "http://google.com/my-search" |
| data | FormData, string, object (will be json encoded), ProtoBuf (will be .serializeBinary) |
| formData | FormData (only one of .data .formData can be specified) |
| onProgress | function, attaches to XMLHttpRequest's progress event |
| onUploadProgress | function, attaches to XMLHttpRequest.upload's progress event |
| canceler | [Canceler](../event-util) allows for a request to canceled mid-way |

## Cookie

| Name | Description |
| - | - |
| getItem(sKey) | |
| setItem(sKey, sValue, vEnd, sPath, sDomain, bSecure) | |
| removeItem(sKey, sPath, sDomain) | |
| hasItem(sKey) | |
| keys() | |

## Encode Uri

Converts `{"key" : "v alue"}` => `key=v%20alue`
