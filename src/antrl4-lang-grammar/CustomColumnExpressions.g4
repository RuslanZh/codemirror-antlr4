grammar CustomColumnExpressions;

/*
 * Parser Rules
 */

objectExpression : COLUMN_NAME                                                   #ColumnName
                 | booleanExpression                                             #BooleanExp
                 | numericExpression                                             #NumericExp
                 | dateExpression                                                #DateExp
                 | stringExpression                                              #StringExp
//                 | FUNCTION_NAME LPAREN objectExpression (COMA objectExpression)* RPAREN  #GenericFunction
                 ;

numericExpression : LPAREN numericExpression RPAREN                                                                  #NumericParenthesis
  | <assoc=right> number=numericExpression CIRCUMFLEX exponent=numericExpression                                      #PowerExp
  | multiplier=numericExpression ASTERISK multiplicand=numericExpression                                       #MultiplyExp
  | dividend=numericExpression SLASH divisor=numericExpression                                                 #DivisionExp
  | augent=numericExpression PLUS addent=numericExpression                                                     #AdditionExp
  | minuend=numericExpression MINUS subtrahend=numericExpression                                               #SubtractionExp
  | TO_NUMERIC LPAREN string=stringExpression (COMMA scale=numericExpression)? RPAREN                                  #ToNumericFunction
  | MOD LPAREN dividend=numericExpression COMMA divisor=numericExpression RPAREN                                       #ModFunction
  | ABS LPAREN number=numericExpression RPAREN                                                                        #AbsFunction
  | LEN LPAREN string=stringExpression RPAREN                                                                        #LenghtFunction
  | FIND LPAREN findText=stringExpression COMMA withinText=stringExpression (COMMA startNum=numericExpression)? RPAREN   #FindFunction
  | DAY LPAREN date=dateExpression RPAREN                                                                            #DayFunction
  | WEEK LPAREN date=dateExpression (COMMA returnType=numericExpression)? RPAREN                                       #WeekFunction
  | WEEKDAY LPAREN date=dateExpression (COMMA returnType=numericExpression)? RPAREN                                    #WeekDayFunction
  | MONTH LPAREN date=dateExpression RPAREN                                                                          #MonthFunction
  | YEAR LPAREN date=dateExpression RPAREN                                                                           #YearFunction
  | HOUR LPAREN date=dateExpression RPAREN                                                                           #HourFunction
  | MINUTE LPAREN date=dateExpression RPAREN                                                                         #MinuteFunction
  | DATE_DIFF LPAREN startDate=dateExpression COMMA endDate=dateExpression (COMMA unit=stringExpression)? RPAREN         #DateDiffFunction
  | IF LPAREN condition=booleanExpression COMMA thenSection=numericExpression COMMA elseSection=numericExpression RPAREN #NumericConditionExp
  | minus=MINUS? value=NUMERIC_VALUE                                                                           #NumericValue
  | COLUMN_NAME                                                                                                #NumericColumnName
  ;

booleanExpression : LPAREN booleanExpression RPAREN                                                                  #LogicalParenthesis
  | left=numericExpression EQUAL right=numericExpression                                                       #NumericEqualExp
  | left=numericExpression NOT_EQUAL right=numericExpression                                                   #NumericNotEqualExp
  | left=numericExpression GREATER_THAN right=numericExpression                                                #NumericGreaterThanExp
  | left=numericExpression LESS_THAN right=numericExpression                                                   #NumericLessThanExp
  | left=numericExpression GREATER_OR_EQUAL right=numericExpression                                            #NumericGreaterOrEqualExp
  | left=numericExpression LESS_OR_EQUAL right=numericExpression                                               #NumericLessOrEqualExp
  | left=dateExpression EQUAL right=dateExpression                                                             #DateEqualExp
  | left=dateExpression NOT_EQUAL right=dateExpression                                                         #DateNotEqualExp
  | left=dateExpression GREATER_THAN right=dateExpression                                                      #DateGreaterThanExp
  | left=dateExpression LESS_THAN right=dateExpression                                                         #DateLessThanExp
  | left=dateExpression GREATER_OR_EQUAL right=dateExpression                                                  #DateGreaterOrEqualExp
  | left=dateExpression LESS_OR_EQUAL right=dateExpression                                                     #DateLessOrEqualExp
  | TO_BOOL LPAREN object=objectExpression RPAREN                                                                    #ToBooleanFunction
  | AND LPAREN booleanExpression (COMMA booleanExpression)+ RPAREN                                                     #AndFunction
  | OR LPAREN booleanExpression (COMMA booleanExpression)+ RPAREN                                                      #OrFunction
  | XOR LPAREN booleanExpression (COMMA booleanExpression)+ RPAREN                                                     #XorFunction
  | NOT LPAREN booleanExpression RPAREN                                                                              #NotFunction
  | EXACT LPAREN stringExpression (COMMA stringExpression)+ RPAREN                                                     #ExactFunction
  | IF LPAREN condition=booleanExpression COMMA thenSection=booleanExpression COMMA elseSection=booleanExpression RPAREN #BooleanConditionExp
  | BOOLEAN_VALUE                                                                                              #BooleanValueExp
  | COLUMN_NAME                                                                                                #BooleanColumnName
  ;

dateExpression : TO_DATE LPAREN string=stringExpression (COMMA format=stringExpression)? RPAREN                  #ToDateExp
  | NOW LPAREN RPAREN                                                                                           #NowFunction
  | IF LPAREN condition=booleanExpression COMMA thenSection=dateExpression COMMA elseSection=dateExpression RPAREN #DateConditionExp
  | DATE_VALUE                                                                                           #DateValue
  | COLUMN_NAME                                                                                          #DateColumnName
  ;

stringExpression : TO_STRING LPAREN object=objectExpression (COMMA format=stringExpression)? RPAREN                  #ToStringFunction
  | CONCAT LPAREN stringExpression (COMMA stringExpression)* RPAREN                                                  #ConcatFunction
  | TRIM LPAREN stringToTrim=stringExpression RPAREN                                                               #TrimFunction
  | LOWER LPAREN stringValue=stringExpression RPAREN                                                               #LowerFunction
  | UPPER LPAREN stringValue=stringExpression RPAREN                                                               #UpperFunction
  | LEFT LPAREN text=stringExpression (COMMA numChars=numericExpression)? RPAREN                                     #LeftFunction
  | RIGHT LPAREN text=stringExpression (COMMA numChars=numericExpression)? RPAREN                                    #RightFunction
  | MID LPAREN text=stringExpression COMMA startNum=numericExpression COMMA numChars=numericExpression RPAREN          #MidFunction
  | SUBSTITUTE LPAREN text=stringExpression COMMA oldText=stringExpression COMMA
                newText=stringExpression (COMMA instanceNum=numericExpression)? RPAREN                            #SubstituteFunction
  | REPLACE LPAREN oldText=stringExpression COMMA startNum=numericExpression COMMA
                numChars=numericExpression COMMA newText=stringExpression RPAREN                                  #ReplaceFunction

  | IF LPAREN condition=booleanExpression COMMA thenSection=stringExpression COMMA elseSection=stringExpression RPAREN #StringConditionExp
  | (STRING_VALUE | DATE_VALUE)                                                                              #StringValue
  | COLUMN_NAME                                                                                              #StringColumnName
  ;

/*
 * Lexer Rules
 */

fragment A  : [Aa] ;
fragment B  : [Bb] ;
fragment C  : [Cc] ;
fragment D  : [Dd] ;
fragment E  : [Ee] ;
fragment F  : [Ff] ;
fragment G  : [Gg] ;
fragment H  : [Hh] ;
fragment I  : [Ii] ;
fragment J  : [Jj] ;
fragment K  : [Kk] ;
fragment L  : [Ll] ;
fragment M  : [Mm] ;
fragment N  : [Nn] ;
fragment O  : [Oo] ;
fragment P  : [Pp] ;
fragment Q  : [Qq] ;
fragment R  : [Rr] ;
fragment S  : [Ss] ;
fragment T  : [Tt] ;
fragment U  : [Uu] ;
fragment V  : [Vv] ;
fragment W  : [Ww] ;
fragment X  : [Xx] ;
fragment Y  : [Yy] ;
fragment Z  : [Zz] ;
fragment UNDERSCORE: '_';
fragment LETTER: [a-zA-Z];
fragment DIGIT: [0-9];

fragment VALID_CHAR: (LETTER | DIGIT | UNDERSCORE);
fragment VALID_NAME: LETTER+ (VALID_CHAR* (LETTER | DIGIT)+)?;
fragment TRUE :  T R U E ;
fragment FALSE : F A L S E ;

//Operators
ASTERISK            : '*' ;
SLASH               : '/' ;
PLUS                : '+' ;
MINUS               : '-' ;
EQUAL               : '=' ;
NOT_EQUAL           : '<>' ;
GREATER_THAN        : '>' ;
LESS_THAN           : '<' ;
GREATER_OR_EQUAL    : '>=' ;
LESS_OR_EQUAL       : '<=' ;
CIRCUMFLEX          : '^';
//String functions
CONCAT : C O N C A T ;
TRIM : T R I M ;
LEN : (L E N) | (L E N G T H);
TO_STRING : (T E X T) | (T O UNDERSCORE S T R I N G) ;
LOWER : (L O W E R) | (L O W E R UNDERSCORE C A S E) ;
UPPER : (U P P E R) | (U P P E R UNDERSCORE C A S E) ;
LEFT : (L E F T) | (L E F T B) ;
RIGHT : (R I G H T) | (R I G H T B) ;
MID : (M I D ) | (M I D B) ;
SUBSTITUTE : S U B S T I T U T E ;
REPLACE : (R E P L A C E) | (R E P L A C E B) ;
//Numeric functions
MOD : M O D ;
ABS : A B S ;
DATE_DIFF : (D A T E D I F) | (D A T E UNDERSCORE D I F F) ;
TO_NUMERIC : T O UNDERSCORE N U M E R I C ;
DAY : D A Y ;
WEEK : (W E E K) | (W E E K N U M) ;
WEEKDAY : W E E K D A Y ;
MONTH : M O N T H ;
YEAR : Y E A R ;
HOUR : H O U R ;
MINUTE : M I N U T E ;
FIND : (F I N D) | (F I N D B) ;
//Boolean functions
AND : A N D ;
OR : O R ;
XOR : X O R ;
NOT : N O T ;
EXACT : E X A C T ;
TO_BOOL : T O UNDERSCORE B O O L (E A N)? ;
//Date functions
NOW : N O W ;
TO_DATE : (T O UNDERSCORE D A T E) | (D A T E V A L U E) ;

IF : I F ;

BOOLEAN_VALUE : (TRUE | FALSE) ;
DATE_FORMAT : (DIGIT DIGIT DIGIT DIGIT '-' DIGIT DIGIT? '-' DIGIT DIGIT?)
  | (DIGIT DIGIT? '/' DIGIT DIGIT? '/' DIGIT DIGIT DIGIT DIGIT) ;
DATE_VALUE : '\'' DATE_FORMAT '\'' ;
NUMERIC_VALUE : '-'? DIGIT+ ('.' DIGIT+)? ;
COLUMN_NAME : VALID_NAME ;
STRING_VALUE : '\'' .*? '\'' ;
LPAREN: '(';
RPAREN: ')';
COMMA: ',';
WHITESPACE : [ \t\r\n]+ -> channel(HIDDEN);

ANY : . ;