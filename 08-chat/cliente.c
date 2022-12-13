#include <sys/socket.h>
#include <sys/types.h>
#include <arpa/inet.h>
#include <netinet/in.h>
#include <stdio.h>
#include <netdb.h>
#include <string.h>
#include <errno.h>
#include <string.h>
#include <stdlib.h>
#include <unistd.h>
#define MAXLINE 4096

int main(int argc, char **argv) {
    int    sockfd;
    // char   recvline[MAXLINE + 1];
    char   error[MAXLINE + 1];
    char   ip[16];
    char   msg[MAXLINE];
    unsigned int port, received_port;
    struct sockaddr_in servaddr;
    socklen_t nAddrLen;
    // FILE *fp;
    // char path[1035];
    nAddrLen = sizeof(struct sockaddr_in);

    if (argc != 3) {
        strcpy(error,"uso: ");
        strcat(error,argv[0]);
        strcat(error," <IPaddress>");
        strcat(error," <Port>");
        perror(error);
        exit(1);
    }

    if ( (sockfd = socket(AF_INET, SOCK_STREAM, 0)) < 0) {
        perror("socket error");
        exit(1);
    }

    bzero(&servaddr, sizeof(servaddr));
    received_port = atoi(argv[2]);
    servaddr.sin_family = AF_INET;
    servaddr.sin_port   = htons(received_port);
    
    if (inet_pton(AF_INET, argv[1], &servaddr.sin_addr) <= 0) {
        perror("inet_pton error");
        exit(1);
    }

    if (connect(sockfd, (struct sockaddr *) &servaddr, sizeof(servaddr)) < 0) {
        perror("connect error");
        exit(1);
    }

    // Get Ip and Port of Client
    getsockname(sockfd, (struct sockaddr *) &servaddr, &nAddrLen);
    inet_ntop(AF_INET, &servaddr.sin_addr, ip, sizeof(ip));
    port = ntohs(servaddr.sin_port);
    printf("Client: \n");
    printf("IP: %s\n", ip);
    printf("Porta local: %u\n", port);
    printf("Server: \n");
    printf("IP: %s\n", argv[1]);
    printf("Porta local: %u\n", received_port);

    while (1) {
        // Read msg
        printf("Enter with message: ");
        fgets(msg, MAXLINE, stdin);

        // Send msg
        if(send(sockfd, msg, strlen(msg), 0) < 0) {
            perror("send error");
            exit(1);
        }

        if (strcmp(msg, "EXIT\n") == 0)
            break;
    }

    // close(sockfd);

    return 0;
}
