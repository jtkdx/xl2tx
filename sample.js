ObjC.import('Foundation');
var fileManager = $.NSFileManager.defaultManager;
var path = 'testFile.txt';
fileManager.createFileAtPathContentsAttributes(path, null, null);
