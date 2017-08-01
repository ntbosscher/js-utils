
# JS-Utils

This is a repository of self-contained js utils.


## Inventory

### Cache utils
#### Cacheable

Simple Caching class that allows for the following methods
| Get() | |
| Set(obj, expiry_ms) | |
| Invalidate() | |
| hasExpired() | returns bool |

### Event utils
#### Canceler
Supports other classes that allow for cancelable asynchronous operations

#### EventEmitter
| Listen(callback) | returns { remove: function() } |
| Emit(obj) | calls each registered callback |
| ListenerCount() | int |

#### Fetchable

Has a nice way of organizing retrievable data. Uses a Cacheable to store it's data value

| .fetching | bool store state for asynchronous fetch |
| .hasMore | bool for list operations |
| get() | |
| set(obj, expiry_ms) | |
| invalidate() | |
