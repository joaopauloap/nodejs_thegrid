const loginmsg = 
`No home directory specified in password file!
Logging in with home=/
# bin/history 
488 cd/opt/LLL/controller/laser/ 
489 vi LLLSDLaserControl.c 
490 make 
491 make install 
492 ./sanity_check 
493 ./configure –o test.cfg 
494 vi test.cfg 
495 vi ~/last_will_and_testament.txt 
496 cat /proc/meminfo
497 ps -a -x -u
498 kill -9 2207
499 kill 2208
500 ps -a -x -u
501 touch/opt/LLL/run/ok
502 LLLSDLaserControl -ok 1`

const lasermsg = 
`* Starting up...
* PSU online
* HV online
* Analog core memory . . . OK!
* Booting pattern reconition systems
* Merging current data mode!
* Starting laser emmitter
* Particle traps test OK!
* Entangling laser with particle traps
>>> Confirmation Alert 
>> Aperture Clear?`

function generalcommands(comando){

    if (comando.match(/uname/i)){
        term.echo("SolarOS 4.0.1 Generic_50203-02 sun4m i386");
    }else if (comando.match(/vi/i)){
        term.echo("Vi not installed");
    }else if(comando == "help"){
        term.echo("MCP: No help for you, User.");
        term.echo("END OF LINE");
    }else if(comando =="whoami"){
        term.echo("flynn");
    }else{
        term.echo("Unknown command " + comando);
    }       
}